---
home: true
title: Home
heroImage: /logos/logo.png
heroText: Guide d'utilisation du Portail de la Science Ouverte
tagline: Documentation complète pour les chercheurs, auteurs et gestionnaires
actions:
    - text: COMMENCER
      link: /fr/welcome/introduction.html
      type: primary

footer: Crown Copyright & ISC | Copyright © 2025 Fisheries and Oceans Canada
---

<div class="custom-cards">
  <div class="card">
    <h3>👩‍🔬 Pour les auteurs</h3>
    <p>Soumettez vos manuscrits facilement :</p>
    <ul>
      <li><router-link to="/fr/dfo/manuscript-record-form.html">Publications du MPO</router-link> - Rapports techniques, documents de recherche et documents consultatifs</li>
      <li><router-link to="/fr/third-party/manuscript-record-form.html">Publications tiers</router-link> - Articles de revue, communications de conférence et publications externes</li>
    </ul>
  </div>

  <div class="card">
    <h3>👨‍💼 Pour les gestionnaires</h3>
    <p>Révisez et approuvez les soumissions de manuscrits :</p>
    <ul>
      <li><router-link to="/fr/user-guide/management-review-overview.html">Guide de révision de gestion</router-link> - Processus complet pour réviser les deux types de publications</li>
      <li><router-link to="/fr/dfo/management-review-process.html">Processus de révision MPO</router-link> - Étapes spécifiques pour les publications du MPO</li>
    </ul>
  </div>

  <div class="card">
    <h3>📚 Documentation complète</h3>
    <p>Nouveau sur le portail? Obtenez des conseils complets :</p>
    <ul>
      <li><router-link to="/fr/welcome/introduction.html">Introduction</router-link> - Aperçu et démarrage</li>
      <li><router-link to="/fr/welcome/portal-navigation.html">Navigation du portail</router-link> - Apprenez à utiliser l'interface</li>
      <li><router-link to="/fr/user-guide/publications-overview.html">Aperçu des publications</router-link> - Comprendre les flux de travail de publication</li>
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