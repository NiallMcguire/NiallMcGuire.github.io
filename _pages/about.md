---
layout: research
permalink: /
title: "Home"
description: "Niall McGuire researches brain-based information retrieval, multimodal signal learning, and neurophysiological human-computer interaction at the University of Strathclyde."
author_profile: false
home_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="academic-shell wrap">
  <aside class="profile-sidebar" aria-label="Profile and navigation">
    <h1>Niall McGuire</h1>
    <img class="profile-photo" src="{{ '/images/60257428.png' | relative_url }}" alt="Niall McGuire" width="200" height="200">
    <p class="profile-role">PhD researcher</p>
    <p class="profile-affiliation">Computer Science &amp; AI<br><a href="https://www.strath.ac.uk/">University of Strathclyde</a><br>Glasgow, United Kingdom</p>
    <nav class="profile-navigation" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#research">Research</a>
      <a href="#publications">Publications</a>
      <a href="#experience">Experience</a>
      <a href="{{ '/cv/' | relative_url }}">Academic CV <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
    </nav>
    <div class="profile-links">
      <a href="mailto:{{ site.author.email }}">Email <i data-lucide="mail" aria-hidden="true"></i></a>
      <a href="{{ site.author.googlescholar }}">Google Scholar <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
      <a href="https://github.com/{{ site.author.github }}">GitHub <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
    </div>
  </aside>

  <div class="academic-content">
    <section class="biography" id="about" aria-label="About Niall">
      <p>I'm a PhD researcher in Computer Science and Artificial Intelligence at the <a href="https://www.strath.ac.uk/">University of Strathclyde</a>, working with <a href="https://scholar.google.co.uk/citations?user=BaFcnWIAAAAJ&amp;hl=en">Yashar Moshfeghi</a> in the iSchool Research Group and NeuraSearch Laboratory. My research connects <strong>information retrieval, machine learning, and neurophysiological signal processing.</strong></p>
      <p>I'm interested in how information systems can understand human needs beyond the words in a search query. I investigate how brain and physiological signals can be represented, decoded, and connected with textual and audio information, with the aim of building more useful and interpretable systems.</p>
      <p>Most recently, I interned at <strong>Microsoft Research</strong> in Redmond (June&ndash;September 2026), working with the Audio &amp; Acoustics group and BCI team on physiological measures of audio quality and listening effort.</p>
      <p>My PhD began in 2022 with a fully funded BAE Systems scholarship. I received the <strong>BAE Systems PhD Student of the Year Award (2026)</strong>, and previously graduated from Strathclyde with first-class honours in Computer Science and the Charles Babbage Prize for the best fourth-year dissertation.</p>
      <p class="collaboration-note">I'm happy to discuss research collaborations and work at the intersection of machine learning and physiological signals. <a href="mailto:{{ site.author.email }}">Get in touch</a>.</p>
    </section>

    <section class="academic-section" id="research">
      <h2>Research interests</h2>
      <dl class="research-topics">
        <div><dt>Brain-based information retrieval</dt><dd>EEG query representations, language models, and cross-modal learning that connect neural responses with passage retrieval across reading and listening.</dd></div>
        <div><dt>Multimodal signal learning</dt><dd>Representation learning and data fusion for EEG, ECG, and eye tracking, with interests extending to fMRI and MEG, semantic information extraction, and time series forecasting.</dd></div>
        <div><dt>Neurophysiological HCI &amp; audio</dt><dd>Interpretable temporal models for mental workload and error classification in operational environments, alongside physiological measures of audio quality and listening effort.</dd></div>
      </dl>
    </section>

    {% include publication-explorer.html %}

    <section class="academic-section" id="experience">
      <div class="academic-section-heading"><h2>Experience</h2><a class="text-link" href="{{ '/cv/' | relative_url }}">Full CV <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>
      <article class="career-entry"><div><h3>Microsoft Research</h3><p class="career-role">Research intern &middot; Redmond, Washington</p></div><p class="career-date">Jun &ndash; Sep 2026</p><p class="career-description">Signal-processing methods and reproducible pipelines for physiological measures of audio quality and listening effort.</p></article>
      <article class="career-entry"><div><h3>University of Strathclyde</h3><p class="career-role">Research associate &middot; Glasgow</p></div><p class="career-date">Jun 2023 &ndash; Jan 2024</p><p class="career-description">Research with BAE Systems and DSTL on real-time mental workload classification using EEG, ECG, and eye tracking, combining signal denoising with temporal machine learning.</p></article>
      <article class="career-entry"><div><h3>University of Strathclyde</h3><p class="career-role">Lead teaching assistant &middot; Glasgow</p></div><p class="career-date">Jan &ndash; May 2023</p><p class="career-description">Practical labs and technical guidance for over 100 MSc students in Machine Learning and Big Data.</p></article>
    </section>
  </div>
</div>