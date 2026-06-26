[Français](#site-de-documentation-utilisateur-du-portail-de-la-science-ouverte)

# Open Science Portal User Documentation Site

## Description

This project generates the static User Documentation site for the [Open Science Portal](https://github.com/dfo-osdt/osp). It is created and maintained by the Open Science Branch of Fisheries and Oceans Canada.

## User Documentation Site

Access the documentation here:
[https://osp-pso-docs.ent.dfo-mpo.ca/](https://osp-pso-docs.ent.dfo-mpo.ca/)

## Reporting Documentation Corrections

If you notice grammatical errors or inaccuracies in the documentation, please report them through one of the following methods:

- **GitHub Issues:** Submit an issue directly in the repository.
- **Email:** Contact the [OSP Support Team](mailto:DFO.OpenScience-ScienceOuverte.MPO@dfo-mpo.gc.ca).

## License

### Software License

The project's code, including configuration files and VuePress 2 components, is licensed under the [MIT License](https://opensource.org/licenses/MIT).
You are free to use, modify, and distribute the code under the terms of this license.

### Documentation Content License

The site’s content is protected by [Government of Canada Crown Copyright](LICENSE).
Unless otherwise stated, content is licensed under the [Open Government Licence – Canada](https://open.canada.ca/en/open-government-licence-canada).

## Getting Started

Ensure you have the following tools installed to build the documentation site:

- [**Node.js v24.x.x+**](https://nodejs.org/en) — A JavaScript runtime used to run `pnpm` and build the Docusaurus site.
- [**pnpm v10.x.x+**](https://pnpm.io/) — A fast, disk space-efficient package manager.
- [**jq v1.7.1**](https://jqlang.org/) - A command-line JSON processor.
- [**Docker**](https://docs.docker.com/engine/install/) - A application container management system.

### Debian/Ubuntu

1. Clone repository onto local machine

```bash
git clone git@github.com:dfo-osdt/osp-docs.git
```

2. Change into `osp-docs` directory and install dependencies

```bash
cd ./osp-docs
pnpm install
```

3. Build the site

```bash
pnpm build
```

4. Build the on-boarding map

```bash
pnpm maps:build
```

5. Start the Typesense search server

```bash
docker compose up -d typesense
```

6. Run the crawler to build the index

```bash
docker compose --profile scraper run --rm scraper
```

5. Start the local development server

```bash
pnpm start
```

### Updating the On-Boarding Map

1. Update the status conditions in `/static/data/onboarding.json`.

2. Rebuild the map

```bash
pnpm maps:build
```

## Scripts
```bash
"scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc",
    "maps:build": "node scripts/geojson-to-dfo-svg.mjs",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
    }
```

## Contributions

All changes must be done via a PR to the `main` branch. PR should be descriptive and provide
reference to any issues as required.

For commits, messages, use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

The commit message should be structured as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

```js
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
]
```

## Additional Resources

- [**Docusaurus 3**](https://docusaurus.io/) - Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make your site interactive.
- [**Markdown**](https://www.markdownguide.org/) - A lightweight markup language with plain text formatting syntax, used for writing the documentation content.
- [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[**TypeScript**](https://www.typescriptlang.org/)

___
[English](#open-science-portal-user-documentation-site)

# Site de documentation pour les utilisateurs du Portail de la science ouverte

## Descriptif

Ce projet génère le site statique de documentation de l’utilisateur pour le [Portail de la science ouverte](https://github.com/dfo-osdt/osp). Il est créé et tenu à jour par la Direction générale de la science ouverte de Pêches et Océans Canada.

## Site de documentation utilisateur

Accédez à la documentation ici :
[https://osp-pso-docs.ent.dfo-mpo.ca/](https://osp-pso-docs.ent.dfo-mpo.ca/)

## Corrections des documents de déclaration

Si vous remarquez des erreurs grammaticales ou des inexactitudes dans la documentation, veuillez les signaler par l’une des méthodes suivantes :

- **Problèmes GitHub :** Soumettre un problème directement dans le dépôt.
- **Email :** Contactez le [OSP Support Team](mailto:DFO.OpenScience-ScienceOuverte.MPO@dfo-mpo.gc.ca).

## Licence

### Licence de logiciel

Le code du projet, y compris les fichiers de configuration et les composants VuePress 2, est sous licence [MIT License](https://opensource.org/licenses/MIT).
Vous êtes libre d’utiliser, de modifier et de distribuer le code selon les termes de cette licence.

### Licence de contenu de documentation

Le contenu du site est protégé par le [droit d’auteur de la Couronne du gouvernement du Canada] (LICENCE).
Sauf indication contraire, le contenu est sous licence en vertu de la [Licence du gouvernement ouvert – Canada](https://open.canada.ca/en/open-government-licence-canada).

## Pour commencer

Assurez-vous d’avoir installé les outils suivants pour créer le site de documentation :

- [**Node.js v24.x.x+**](https://nodejs.org/en) — Un environnement d’exécution JavaScript utilisé pour exécuter 'pnpm' et construire le site Docusaurus.
- [**pnpm v10.x.x+**](https://pnpm.io/) — Un gestionnaire de paquets rapide et économe en espace disque.
- [**jq v1.7.1**](https://jqlang.org/) - Un processeur JSON en ligne de commande.
- [**Docker**](https://docs.docker.com/engine/install/) - Un système de gestion de conteneurs d’applications.

### Debian/Ubuntu

1. Cloner le référentiel sur une machine locale

```Bash
git clone git@github.com :dfo-osdt/osp-docs.git
```

2. Passez au répertoire 'osp-docs' et installez les dépendances

```Bash
cd ./osp-docs
pnpm install
```

3. Construisez le site

```Bash
pnpm build
```

4. Construire la carte d’intégration

```Bash
pnpm maps:build
```

5. Démarrez le serveur de recherche Typesense

```Bash
Docker compose up -d typesense
```

6. Exécutez le robot d’exploration pour créer l’index

```Bash
docker compose --profile scraper run --rm scraper
```

7. Démarrez le serveur de développement local

```Bash
pnpm start
```

### Mise à jour de la carte d’intégration

1. Mettez à jour les conditions d’état dans '/static/data/onboarding.json'.

2. Reconstruire la carte

```Bash
pnpm maps:build
```

## Scripts
```Bash
"scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc",
    "maps:build": "node scripts/geojson-to-dfo-svg.mjs",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  }
```

## Contributions

Tous les changements doivent être effectués au moyen d’une DA à la branche « principale ». Les RP doivent être descriptifs et fournir
des références à tout problème, au besoin.

Pour les commits, les messages, utilisez [Commits conventionnels](https://www.conventionalcommits.org/en/v1.0.0/)

Le message de validation doit être structuré comme suit :

```texte
<type>[portée facultative] : <description>

[corps facultatif]

[pied de page facultatif]
```

### Types de validation

```js
[
  « construire »,
  « corvée »,
  'ci',
  'docs',
  'exploit',
  'réparer',
  'perf',
  'refactorisation',
  'revert',
  'style',
  'test'
]
```

## Ressources supplémentaires

- [**Docusaurus 3**](https://docusaurus.io/) - Docusaurus est un générateur de sites statiques. Il crée une application d’une seule page avec une navigation rapide côté client, tirant parti de toute la puissance de React pour rendre votre site interactif.
- [**Markdown**](https://www.markdownguide.org/) - Un langage de balisage léger avec une syntaxe de formatage de texte brut, utilisé pour écrire le contenu de la documentation.
- [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[**TypeScript**](https://www.typescriptlang.org/)