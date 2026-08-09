# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal documentation/portfolio site for Samo Blatnik, built with **Astro v5** + **Starlight v0.37** (documentation theme). Deployed to Netlify at `samob.netlify.app`. Trilingual: Slovenian (default/root), English (`/en/`), Croatian (`/hr/`).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server at `localhost:4321` (hot reload) |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build |
| `npx astro check` | TypeScript type checking (run before commits) |

No linter or test framework is configured.

## Architecture

### Content Routing

Content lives in `src/content/docs/` as MDX files. Starlight maps file paths to routes:
- Root (Slovenian): `src/content/docs/cv/index.mdx` → `/cv/`
- English: `src/content/docs/en/cv/index.mdx` → `/en/cv/`
- Croatian: `src/content/docs/hr/cv/index.mdx` → `/hr/cv/`

Sections: CV (`cv/`), Projects (`projects/`), Guides (`guides/`). Each section must exist in all three locale directories with matching slugs.

### Sidebar & i18n

- Sidebar is defined in `astro.config.mjs` under `starlight.sidebar` with Slovenian labels as primary and `translations` field for EN/HR
- UI string translations: `src/content/i18n/{en,hr,sl}.json` — accessed via `Astro.locals.t()` in components
- Default locale is `root` (mapped to `sl`), not a path prefix — Slovenian content sits at the top level of `src/content/docs/`

### Custom Component Overrides

Four components in `src/components/` override Starlight defaults (registered in `astro.config.mjs` under `starlight.components`):

- **ThemeProvider.astro** — Forces dark theme as default; uses `is:inline` script to prevent FOUC
- **ThemeSelect.astro** — Dark/light toggle button
- **LanguageSelect.astro** — Custom language switcher with flag emojis (🇸🇮/🇬🇧/🇭🇷)
- **Lightbox.astro** — Dialog-based image viewer; usage: `<Lightbox id="unique-id" src={img} alt="..." />`

### Content Collections

Defined in `src/content.config.ts` using Starlight's `docsLoader()`/`docsSchema()` and `i18nLoader()`/`i18nSchema()`.

### Assets

- `src/assets/` — Processed by Sharp (optimization, responsive images). Use `import` + `<Image>` from `astro:assets`
- `public/assets/` — Served as-is, no processing

### Vite Alias

`~` resolves to `src/` directory (configured in `astro.config.mjs` `vite.resolve.alias`).

## Code Style

- **TypeScript strict mode** (`astro/tsconfigs/strict`)
- **ES modules** throughout (`"type": "module"`)
- 2-space indentation, single quotes, trailing commas, semicolons
- Components: PascalCase. Config files: kebab-case `.mjs`. CSS classes: kebab-case
- Custom web elements: kebab-case with `starlight-` prefix
- Use Starlight CSS custom properties (`--sl-color-*`) for styling consistency
- Avoid H1 in MDX files — Starlight renders `title` from frontmatter automatically; start with H2

## Content Authoring

- All MDX files require frontmatter with `title` and `description`
- Write in first-person for personal sections
- Sidebar `slug` values must match the directory path of the content file
- Config changes require dev server restart; content changes hot-reload
