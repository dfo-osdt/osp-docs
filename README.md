[Français](#Site-de-## License

This documentation is protected by [Government of Canada Crown Copyright](LICENSE) and is licensed under the [Open Government Licence – Canada](https://open.canada.ca/en/open-government-licence-canada).

You are free to use, reproduce, and distribute this documentation, in whole or in part, for any purpose, commercial or non-commercial, provided that you follow the terms of the Open Government Licence.on-utilisateur-du-Portail-de-Science-Ouverte)

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

- [**Node.js v18.19.0+**](https://nodejs.org/en) — A JavaScript runtime used to run `pnpm` and build the VuePress site.
- [**pnpm v9.4.0+**](https://pnpm.io/) — A fast, disk space-efficient package manager.

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
pnpm docs:build
```

4. Start the local development server

```bash
pnpm run docs:dev
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

## Aditional Resources

- [**VuePress 2**](https://v2.vuepress.vuejs.org/) - A static site generator powered by Vue.js 3, used for building the documentation site.
- [**Vue.js 3**](https://vuejs.org/) - The progressive JavaScript framework that powers VuePress 2.
- [**Markdown**](https://www.markdownguide.org/) - A lightweight markup language with plain text formatting syntax, used for writing the documentation content.
- [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[**TypeScript**](https://www.typescriptlang.org/)
- For scripting and building custom features or plugins within the VuePress site.

___
[English](#open-science-portal-user-documentation-site)

# Site de documentation utilisateur du Portail de la science ouverte

## Description

Ce projet génère le site de documentation utilisateur statique pour
le [Portail de la science ouverte](https://github.com/dfo-osdt/osp).
Il est créé et maintenu par la Direction de la science ouverte de
Pêches et Océans Canada.

## Site de documentation utilisateur

Accédez à la documentation ici :
[https://osp-pso-docs.ent.dfo-mpo.ca/](https://osp-pso-docs.ent.dfo-mpo.ca/)

## Signaler des corrections de documentation

Si vous remarquez des erreurs grammaticales ou des inexactitudes dans la documentation,
veuillez les signaler par l’un des moyens suivants :

- **GitHub Issues :** Soumettez un problème directement dans le dépôt.
- **Courriel :** Contactez l’[équipe de soutien du PSO](mailto:DFO.OpenScience-ScienceOuverte.MPO@dfo-mpo.gc.ca).

## Licence

### Licence du logiciel

Le code du projet, y compris les fichiers de configuration et les composants VuePress 2,
est sous licence [MIT](https://opensource.org/licenses/MIT).
Vous êtes libre d’utiliser, de modifier et de distribuer le code selon les termes de cette licence.

### Licence du contenu de la documentation

Le contenu du site est protégé par le [droit d’auteur de la Couronne du gouvernement du Canada](LICENSE).
Sauf indication contraire, le contenu est sous licence
[Licence du gouvernement ouvert – Canada](https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada).

## Démarrage rapide

Assurez-vous d’avoir les outils suivants installés pour compiler le site de documentation :

- [**Node.js v18.19.0+**](https://nodejs.org/en) — Un environnement d’exécution JavaScript
  utilisé pour exécuter `pnpm` et compiler le site VuePress.
- [**pnpm v9.4.0+**](https://pnpm.io/) — Un gestionnaire de paquets rapide et efficace en espace disque.

### Debian/Ubuntu

1. Clonez le dépôt sur votre machine locale

```bash
git clone git@github.com:dfo-osdt/osp-docs.git
```

2. Accédez au répertoire `osp-docs` et installez les dépendances

```bash
cd ./osp-docs
pnpm install
```

3. Compilez le site

```bash
pnpm docs:build
```

4. Démarrez le serveur de développement local

```bash
pnpm run docs:dev
```

## Contributions

Toutes les modifications doivent être effectuées via une PR vers la branche `main`.
Les PR doivent être descriptives et inclure des références aux issues, si nécessaire.

Pour les messages de commit, utilisez [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Le message de commit doit être structuré comme suit :

```text
<type>[portée optionnelle] : <description>

[corps optionnel]

[pied(s) de page optionnel(s)]
```

### Types de Commit

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

## Ressources supplémentaires

- [**VuePress 2**](https://v2.vuepress.vuejs.org/) - Un générateur de site statique alimenté par Vue.js 3, utilisé pour construire le site de documentation.
- [**Vue.js 3**](https://vuejs.org/) - Le framework JavaScript progressif qui alimente VuePress 2.
- [**Markdown**](https://www.markdownguide.org/) - Un langage de balisage léger avec une syntaxe de formatage en texte brut, utilisé pour rédiger le contenu de la documentation.
- [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[**TypeScript**](https://www.typescriptlang.org/) - Pour les scripts et la création de fonctionnalités ou de plugins personnalisés dans le site VuePress.
