# OSP User Documentation Site

## Description
This project is the User Documentation Static Site generator for the Fisheries and Oceans Canada [Open Science Portal](https://github.com/dfo-osdt/osp). 
## Table of Conents
1) [Installer Guide](#1---installer-guide)  
2) [Run Guide](#2---run-guide)
3) [How to Contribute](#4---how-to-contribute)
4) [License](#5---license)

## 1 - Installer Guide

### Windows 10

---
### MacOS

---
### Debian/Ubuntu Linux
All steps are taken using a bash terminal.
#### 1) Install Required Packages
- git v2.30.2+ [Install Guide](https://github.com/git-guides/install-git#debianubuntu)
- Node.js v16.19+ [Install Guide](https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions)
- pnpm v8.7.5+ [Install Guide](https://pnpm.io/installation#using-npm)
#### 2) Install VuePress Locally
```bash
pnpm add -D vuepress@next @vuepress/client@next vue
```
#### 3) Clone Documentation Repo
```bash
cd /<Desired Local Repo Location>/
git clone  git@github.com:dfo-osdt/osp-docs.git
cd osp-docs/
```
#### 4) Initiate Local Server
```bash
pnpm docs:dev
```
VuePress will start a hot-reloading development server at [http://localhost:8080](http://localhost:8080). When you modify your markdown files, the content in the browser will be auto updated.

---
## 2- Run Guide
### Start Local Development Server
#### Debian/Ubuntu Linux
Open a bash terminal instance and navigate to the osp-docs directory.
```
cd /.../osp-docs/
```
Launch the local development server with pnpm.
```
pnpm docs:dev
```
VuePress will start a hot-reloading development server at http://localhost:8080. When you modify your markdown files, the content in the browser will be auto updated.

### Stop the Development Server
Within the terminal instance running the Development Server send a kill command by pressing the keys **Control + c**.
## 3 - How to Contribute

## 4 - License
Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [ISC](LICENSE).

