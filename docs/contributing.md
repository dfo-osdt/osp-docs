---
sidebar: auto
lang: en-US
---

# Contribution Guide

## Required 
### Software
- git v2.30.2+ [Install Guide](https://github.com/git-guides/install-git#debianubuntu)
- Node.js v16.19+ [Install Guide](https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions)
- pnpm v8.7.5+ [Install Guide](https://pnpm.io/installation#using-npm)
## Installation

### Windows 10

Coming Soon!
---
### Unix - MacOS & Debian/Ubuntu Linux
All steps are taken using a bash terminal.
#### 1) Install Required Packages
- git v2.30.2+ [Install Guide](https://github.com/git-guides/install-git#debianubuntu)
- Node.js v16.19+ [Install Guide](https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions)
#### 2) Install VuePress Locally
```bash
npm install -D vuepress@next
```
#### 3) Clone Documentation Repo
```bash
cd /<Desired Local Repo Location>/
git clone  git@github.com:dfo-osdt/osp-docs.git
cd osp-docs/
```
#### 4) Initiate Local Server
```bash
npm run docs:dev
```
VuePress will start a hot-reloading development server at [http://localhost:8080](http://localhost:8080). When you modify your markdown files, the content in the browser will be auto updated.

---
## Run Guide
### Start Local Development Server
#### Unix - MacOS & Debian/Ubuntu Linux
Open a bash terminal instance and navigate to the osp-docs directory.
```
cd /.../osp-docs/
```
Launch the local development server with npm.
```
npm run docs:dev
```
VuePress will start a hot-reloading development server at http://localhost:8080. When you modify your markdown files, the content in the browser will be auto updated.

### Stop the Development Server
Within the terminal instance running the Development Server send a kill command by pressing the keys **Control + c**.

## Documentation
The documentation site is built using the Vuepress 2 source code contained within this repository. Each page on this site is written in (Markdown)[https://www.markdownguide.org/] and saved as a .md file. VuePress 2 will automatically convert the Markdown files to (HTML)[https://developer.mozilla.org/en-US/docs/Web/HTML]. If you are running the (Local Development Server)[#Start-Local-Development-Server] you will see these changes upon saving the file.

All the Markdown source files are placed in the `docs` directory. There are two translations being maintained:
- English (en-US) in `/docs/guide` path
- French (Français) in `/docs/fr/guide` path

Whenever a new page file is created, the following steps should be taken:
1) A new page file with the identical name should be created in the other language guide 
2) The new page should be added to the  

## Project Structure

```md
docs
├──.vuepress
|   ├── client.js
|   ├── config.js
|   ├── configs
|   │   ├── head.ts
|   │   ├── index.js
|   │   ├── sidebar
|   │   |   ├── en.ts
|   │   |   ├── fr.ts
|   │   |   └── index.js
|   │   └── index.html
|   ├── public
|   │   └── assets
|   │       ├── favicons
|   │       │   ├── android-chrome-192x192.png
|   │       │   ├── android-chrome-512x512.png
|   │       │   ├── apple-touch-icon.png
|   │       │   ├── favicon-16x16.png
|   │       │   ├── favicon-32x32.png
|   │       │   ├── safari-pinned-tab.svg
|   │       │   └── site.webmanifest
|   │       ├── images
|   │       └── logos
|   │           └── logo.png
|   └── styles
|       └── index.scss
├── contributing.md
├── fr
│   ├── contributing.md
│   ├── guide
│   │   ├── acknowledgments.md
│   │   ├── advanced-features.md
│   │   ├── appendices.md
│   │   ├── customization-and-security.md
│   │   ├── getting-started.md
│   │   ├── introduction.md
│   │   ├── legal-and-compliance.md
│   │   ├── support-and-contact.md
│   │   ├── troubleshooting.md
│   │   ├── updates-and-version-history.md
│   │   ├── user-interface-overview.md
│   │   └── using-the-application.md
│   └── README.md
├── guide
│   ├── acknowledgments.md
│   ├── advanced-features.md
│   ├── appendices.md
│   ├── customization-and-security.md
│   ├── getting-started.md
│   ├── introduction.md
│   ├── legal-and-compliance.md
│   ├── support-and-contact.md
│   ├── troubleshooting.md
│   ├── updates-and-version-history.md
│   ├── user-interface-overview.md
│   └── using-the-application.md
├── README.md
└── style-guide.md
```
## /docs/
```md
docs
```
/docs is the base directory for the website. All Markdown (.md) files within /docs will be converted into an accessable webpage. /docs is set as the root directory.

### contributing.md
```md
docs
├── contributing.md
```
contributing.md creates the webpage you are reading right now! This file contains information on how users can clone the public GitHub repository and contribute to the OSP-PSO Documentation site.\
This page can be accessed at [docs.osp-pso.ca/contributing.html](/contributing.html)

### README.md
```md
docs
├── README.md
```
README.md serves as the English landing-page for [docs.osp-pso.ca](/). This page should be kept as simple as possible and easily guide the user to where they need to go.

### style-guide.md
```md
docs
├── style-guide.md
```
style-guide.md is a "hidden" page for developers. This page contains the logos, colours, fonts, and style information required for the consistant development of the OSP-PSO Documentation website. The style of the documentation website should match the style of the [osp-pso.ca](https://docs.osp-pso.ca/) as much as possible. This page is accessible at [docs.osp.pso.ca/style-guide.html](/style-guide.ca)

## /docs/.vuepress
```md
docs
├──.vuepress
```
/docs/.vuepress contain the front-end configuration files. Theme configuration, side-bar, navigation-bar, and image assets can be found here. Font-end configuration is madeup of a combination of Javascript and Typescript files.

## /docs/fr/
```md
docs
├──fr
```
/docs/fr is the directory which contain all content translated into the French language. The /fr/ directory should be an identical mirror of the base /docs and /docs/guide directory.

### contributing.md
```md
docs
├──fr
│   ├── contributing.md
```
/docs/fr/contributing.md contains the information on this webpage but translated into the French language. It can be acccessed at [docs.osp-pso.ca/fr/contributing.html](/fr/contributing.html)

### guide
```md
docs
├──fr
│   ├── guide
```
/docs/fr/guide is the directory which contain all the guidance documents translated into the French language. This files should contain the identical information as found in /docs/guide.

### README.md
```md
docs
├──fr
│   └── README.md
```
/docs/fr/README.md serves as the landing-page for the French facing [docs.osp-pso.ca/fr/](/fr/). This page This page should be kept as simple as possible and easily guide the user to where they need to go.

## /docs/guide/
```md
docs
├──guide
```
/docs/guide is the directory which contain all the guidance documents written in the English language.


## Style Guide
See Style Guide
[OSP-PSO Style Guide](/style-guide.html)