---
lang: en-US
title: OSP User Documentation Site
description: User Documentation for the usage of the Fisheries and Oceans Canada Open
---

# OSP User Documentation Site

## Getting Started
### Debian/Ubuntu GNU/Linux
All steps are taken using a bash terminal.
#### Required Packages
- git v2.30.2+ [Install Guide](https://github.com/git-guides/install-git#debianubuntu)
- Node.js v16.19+ [Install Guide](https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions)
- pnpm v8.7.5+ [Install Guide](https://pnpm.io/installation#using-npm)
#### Install VuePress Locally
```bash
pnpm add -D vuepress@next @vuepress/client@next vue
```
#### Clone Documentation Repo
```bash
cd /<Desired Local Repo Location>/
git clone  git@github.com:dfo-osdt/osp-docs.git
cd osp-docs/
```
#### Initiate Local Server
```bash
pnpm docs:dev
```
VuePress will start a hot-reloading development server at [http://localhost:8080](http://localhost:8080). When you modify your markdown files, the content in the browser will be auto updated.