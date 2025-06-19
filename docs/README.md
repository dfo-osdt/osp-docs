---
home: true
title: Home
heroImage: /logos/logo.png
heroText: Open Science Portal User Guide
tagline: Complete documentation for researchers, authors, and managers
actions:
    - text: GET STARTED
      link: /en/general/introduction.html
      type: primary

footer: Crown Copyright © 2025 Fisheries and Oceans Canada | Licensed under Open Government Licence – Canada
---

<div class="custom-cards">
  <div class="card">
    <h3>👩‍🔬 For Authors</h3>
    <p>Submit your manuscripts with ease:</p>
    <ul>
      <li><router-link to="/en/dfo/manuscript-record-form.html">DFO Publications</router-link> - Technical reports, research documents, and advisory documents</li>
      <li><router-link to="/en/third-party/manuscript-record-form.html">Third-Party Publications</router-link> - Journal articles, conference papers, and external publications</li>
    </ul>
  </div>

  <div class="card">
    <h3>👨‍💼 For Managers</h3>
    <p>Review and approve manuscript submissions:</p>
    <ul>
      <li><router-link to="/en/user-guide/management-review-overview.html">Management Review Guide</router-link> - Complete process for reviewing both publication types</li>
      <li><router-link to="/en/dfo/management-review-process.html">DFO Review Process</router-link> - Specific steps for DFO publications</li>
    </ul>
  </div>

  <div class="card">
    <h3>📚 Complete Documentation</h3>
    <p>New to the portal? Get comprehensive guidance:</p>
    <ul>
      <li><router-link to="/en/welcome/introduction.html">Introduction</router-link> - Overview and getting started</li>
      <li><router-link to="/en/welcome/portal-navigation.html">Portal Navigation</router-link> - Learn to use the interface</li>
      <li><router-link to="/en/user-guide/publications-overview.html">Publications Overview</router-link> - Understand publication workflows</li>
    </ul>
  </div>
</div>

<style>
.custom-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 2rem auto;
}

.card {
  background: var(--c-bg-light);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--c-text);
  border-bottom: none;
  font-size: 1.2rem;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
}

.card p {
  color: var(--c-text-light);
  margin-bottom: 1rem;
}

.card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.card li {
  margin-bottom: 0.5rem;
}

.card a,
.card router-link {
  color: var(--c-brand);
  text-decoration: none;
  font-weight: 500;
}

.card a:hover,
.card router-link:hover {
  text-decoration: underline;
  color: var(--c-brand-light);
}

/* Better link colors for dark mode */
@media (prefers-color-scheme: dark) {
  .card a,
  .card router-link {
    color: #4fc08d;
  }

  .card a:hover,
  .card router-link:hover {
    color: #6bd4a8;
  }
}

@media (max-width: 1024px) {
  .custom-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .custom-cards {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 1rem;
  }
}
</style>

