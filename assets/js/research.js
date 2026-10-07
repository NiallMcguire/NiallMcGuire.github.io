(() => {
  'use strict';

  window.lucide?.createIcons();

  const explorer = document.querySelector('[data-publication-explorer]');
  if (!explorer) return;
  const paperData = JSON.parse(document.querySelector('#publication-data').textContent);
  const paperButtons = [...explorer.querySelectorAll('[data-paper]')];
  const preview = explorer.querySelector('#pdf-canvas');
  const previewMessage = explorer.querySelector('#pdf-message');
  const paperTitle = explorer.querySelector('#selected-title');
  const paperVenue = explorer.querySelector('#selected-venue');
  const paperAuthors = explorer.querySelector('#selected-authors');
  const paperSummary = explorer.querySelector('#selected-summary');
  const paperLink = explorer.querySelector('#paper-link');
  const publisherLink = explorer.querySelector('#publisher-link');
  const pageLabel = explorer.querySelector('#pdf-page');
  const previousPage = explorer.querySelector('#previous-page');
  const nextPage = explorer.querySelector('#next-page');
  let visibleButtons = paperButtons;
  let selectedIndex = -1;
  let documentGeneration = 0;
  let pdfDocument;
  let loadingTask;
  let renderTask;
  let pageNumber = 1;
  let pdfLibrary;

  function updatePageControls() {
    previousPage.disabled = !pdfDocument || pageNumber <= 1;
    nextPage.disabled = !pdfDocument || pageNumber >= pdfDocument.numPages;
    pageLabel.textContent = pdfDocument ? `${pageNumber} / ${pdfDocument.numPages}` : '-- / --';
  }

  async function renderPage(generation) {
    const currentDocument = pdfDocument;
    const currentPage = pageNumber;
    if (!currentDocument) return;
    renderTask?.cancel();
    const page = await currentDocument.getPage(currentPage);
    if (generation !== documentGeneration || currentPage !== pageNumber) return;
    const availableWidth = Math.max(240, preview.parentElement.clientWidth - 48);
    const originalViewport = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: Math.min(availableWidth / originalViewport.width, 1.2) });
    const resolution = Math.min(window.devicePixelRatio || 1, 2);
    preview.width = Math.floor(viewport.width * resolution);
    preview.height = Math.floor(viewport.height * resolution);
    preview.style.width = `${viewport.width}px`;
    preview.style.height = `${viewport.height}px`;
    renderTask = page.render({
      canvasContext: preview.getContext('2d'),
      viewport,
      transform: resolution === 1 ? null : [resolution, 0, 0, resolution, 0, 0]
    });
    try {
      await renderTask.promise;
      if (generation !== documentGeneration) return;
      preview.hidden = false;
      previewMessage.hidden = true;
      updatePageControls();
    } catch (error) {
      if (error.name !== 'RenderingCancelledException') throw error;
    }
  }

  async function selectPaper(index, updateHash = true) {
    selectedIndex = index;
    const paper = paperData[index];
    const generation = ++documentGeneration;
    paperButtons.forEach(button => {
      const selected = Number(button.dataset.paper) === index;
      button.setAttribute('aria-pressed', String(selected));
      button.classList.toggle('is-selected', selected);
    });
    paperTitle.textContent = paper.title;
    paperVenue.textContent = `${paper.venue} / ${paper.year}`;
    paperAuthors.textContent = paper.authors;
    paperSummary.textContent = paper.summary;
    paperLink.hidden = !paper.pdf;
    if (paper.pdf) paperLink.href = paper.pdf;
    publisherLink.hidden = !paper.publisher;
    if (paper.publisher) publisherLink.href = paper.publisher;
    if (updateHash) history.replaceState(null, '', `#paper-${paper.id}`);
    renderTask?.cancel();
    loadingTask?.destroy();
    loadingTask = undefined;
    pdfDocument = undefined;
    pageNumber = 1;
    preview.hidden = true;
    previewMessage.hidden = false;
    previewMessage.textContent = paper.pdf ? 'Loading paper...' : 'PDF not yet available here. See Google Scholar for the publication record.';
    updatePageControls();
    if (!paper.pdf) return;
    try {
      if (!pdfLibrary) {
        pdfLibrary = import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs').then(library => {
          library.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
          return library;
        });
      }
      const library = await pdfLibrary;
      if (generation !== documentGeneration) return;
      loadingTask = library.getDocument(paper.pdf);
      const loadedDocument = await loadingTask.promise;
      if (generation !== documentGeneration) {
        loadedDocument.destroy();
        return;
      }
      pdfDocument = loadedDocument;
      await renderPage(generation);
    } catch (error) {
      if (generation !== documentGeneration) return;
      previewMessage.textContent = 'Preview unavailable. Use Open PDF to read the paper.';
      pdfLibrary = undefined;
    }
  }

  paperButtons.forEach(button => button.addEventListener('click', () => selectPaper(Number(button.dataset.paper))));
  explorer.querySelectorAll('[data-filter]').forEach(filter => {
    filter.addEventListener('click', () => {
      explorer.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
      paperButtons.forEach(button => {
        button.hidden = filter.dataset.filter !== 'all' && paperData[Number(button.dataset.paper)].topic !== filter.dataset.filter;
      });
      visibleButtons = paperButtons.filter(button => !button.hidden);
      if (!visibleButtons.some(button => Number(button.dataset.paper) === selectedIndex) && visibleButtons.length) {
        selectPaper(Number(visibleButtons[0].dataset.paper));
      }
    });
  });
  explorer.querySelectorAll('[data-cycle]').forEach(button => {
    button.addEventListener('click', () => {
      const current = visibleButtons.findIndex(item => Number(item.dataset.paper) === selectedIndex);
      const next = (current + Number(button.dataset.cycle) + visibleButtons.length) % visibleButtons.length;
      selectPaper(Number(visibleButtons[next].dataset.paper));
    });
  });
  previousPage.addEventListener('click', () => {
    if (!pdfDocument || pageNumber <= 1) return;
    pageNumber -= 1;
    updatePageControls();
    renderPage(documentGeneration).catch(() => { previewMessage.hidden = false; previewMessage.textContent = 'Unable to render this page. Use Open PDF.'; });
  });
  nextPage.addEventListener('click', () => {
    if (!pdfDocument || pageNumber >= pdfDocument.numPages) return;
    pageNumber += 1;
    updatePageControls();
    renderPage(documentGeneration).catch(() => { previewMessage.hidden = false; previewMessage.textContent = 'Unable to render this page. Use Open PDF.'; });
  });
  let resizeTimer;
  new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (pdfDocument) renderPage(documentGeneration).catch(() => {});
    }, 150);
  }).observe(preview.parentElement);
  const requestedPaper = paperData.findIndex(paper => location.hash === `#paper-${paper.id}`);
  const defaultPaper = paperData.findIndex(paper => paper.pdf);
  selectPaper(requestedPaper >= 0 ? requestedPaper : Math.max(defaultPaper, 0), false);
  window.addEventListener('hashchange', () => {
    const index = paperData.findIndex(paper => location.hash === `#paper-${paper.id}`);
    if (index >= 0) {
      const matchingButton = paperButtons[index];
      if (matchingButton.hidden) explorer.querySelector('[data-filter="all"]').click();
      selectPaper(index, false);
    }
  });
})();