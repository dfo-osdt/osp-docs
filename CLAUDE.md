# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the user documentation site for the Open Science Portal (OSP), maintained by the Open Science Branch of Fisheries and Oceans Canada. It's a bilingual (English/French) static documentation site built with VuePress 2.

**Live site:** https://osp-pso-docs.ent.dfo-mpo.ca/

## Development Commands

### Setup
```bash
pnpm install
```

### Development server
```bash
pnpm run docs:dev
# Runs on http://localhost:3000
```

### Build
```bash
pnpm docs:build
# Outputs to docs/.vuepress/dist
```

## Project Architecture

### Bilingual Structure
The project maintains parallel English/French content with locale-specific configurations:

- **English content:** `docs/en/`
- **French content:** `docs/fr/`
- **Locales configured in:** `docs/.vuepress/config.ts` (lines 15-28)
- **Sidebar navigation:**
  - `docs/.vuepress/configs/sidebar/en.ts` (English)
  - `docs/.vuepress/configs/sidebar/fr.ts` (French)

Both language versions share the same structure:
- `general/` - Getting started, portal navigation, ORCID, settings, troubleshooting
- `features/` - Author explorer, publication explorer
- `publication-process/` - Manuscript records, management review, publications

### VuePress Configuration

**Main config:** `docs/.vuepress/config.ts`
- Uses Vite bundler
- Default theme with custom navbar/sidebar per locale
- Search plugin configured for both languages
- Port: 3000

**Configuration modules:**
- `docs/.vuepress/configs/index.ts` - Exports head, sidebars
- `docs/.vuepress/configs/head.ts` - Meta tags, favicons
- `docs/.vuepress/configs/sidebar/` - Sidebar definitions per locale

**Static assets:** `docs/.vuepress/public/`
- `favicons/` - Site icons
- `images/` - Documentation images
- `logos/` - Logo assets

### Content Organization

When editing documentation:
1. **Bilingual changes:** Update both `docs/en/` and `docs/fr/` in parallel
2. **Navigation updates:** Modify both sidebar configs (`en.ts` and `fr.ts`)
3. **Images:** Place in `docs/.vuepress/public/images/` and reference as `/images/filename.ext`

## Git Workflow

- **Main branch:** `main` (all PRs target this branch)
- **Commit format:** Use [Conventional Commits](https://www.conventionalcommits.org/)
  - Types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`
  - Format: `<type>[optional scope]: <description>`

## Requirements

- Node.js v18.19.0+
- pnpm v9.4.0+ (specified in package.json: 10.8.0)

## License

- **Code:** MIT License
- **Documentation content:** Open Government Licence - Canada (Crown Copyright)
