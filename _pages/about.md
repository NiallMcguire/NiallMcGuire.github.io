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
      <a href="#publications">Publications</a>
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
      <p>I'm a PhD researcher in Computer Science and Artificial Intelligence at the <a href="https://www.strath.ac.uk/">University of Strathclyde</a>, working with <a href="https://scholar.google.co.uk/citations?user=BaFcnWIAAAAJ&amp;hl=en">Yashar Moshfeghi</a> in the iSchool Research Group and NeuraSearch Laboratory. My research focuses on <strong>information retrieval</strong>, <strong>machine learning</strong>, and <strong>neurophysiological signal processing</strong>.</p>
      <p>I'm interested in how information systems can understand human needs beyond the words in a search query. I investigate how <strong>brain and physiological signals</strong> can be represented, decoded, and connected with textual and audio information, with the aim of building more useful and interpretable systems.</p>
      <p>Most recently, I completed an internship at <a href="https://www.microsoft.com/en-us/research/"><strong>Microsoft Research</strong></a> in Redmond (June&ndash;September 2026), working with the <a href="https://www.microsoft.com/en-us/research/project/audio-and-acoustics/">Audio &amp; Acoustics group</a> and the <a href="https://www.microsoft.com/en-us/research/"><strong>BCI (Brain-Computer Interface) team in the Microsoft Research Neuroscience Group</strong></a> on physiological measures of audio quality and listening effort.</p>
      <p>My PhD began in 2022 with a fully funded BAE Systems scholarship. I received the <strong>BAE Systems PhD Student of the Year Award (2026)</strong>, and previously graduated from Strathclyde with first-class honours in Computer Science and the Charles Babbage Prize for the best fourth-year dissertation.</p>
      <p class="collaboration-note">I'm happy to discuss research collaborations at the intersection of <strong>machine learning</strong> and <strong>physiological signals</strong>. <a href="mailto:{{ site.author.email }}">Get in touch</a>.</p>
    </section>

    {% include publication-explorer.html %}
  </div>
</div>