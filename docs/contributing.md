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
Launch the local development server with pnpm.
```
npm run docs:dev
```
VuePress will start a hot-reloading development server at http://localhost:8080. When you modify your markdown files, the content in the browser will be auto updated.

### Stop the Development Server
Within the terminal instance running the Development Server send a kill command by pressing the keys **Control + c**.

## Style Guide
See Style Guide\
[OSP Style Guide](https://docs.osp-pso.ca/styleguide.html)