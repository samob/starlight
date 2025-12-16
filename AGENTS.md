# AGENTS.md

## Commands
- **Build**: `npm run build`
- **Dev server**: `npm run dev`
- **Preview**: `npm run preview`
- **Lint**: No lint command configured
- **Test**: No test framework configured
- **Type check**: `npx astro check`

## Code Style Guidelines

### TypeScript
- Use strict TypeScript (`astro/tsconfigs/strict`)
- Include `@ts-check` in config files
- ES modules (`type: "module"`)

### Imports
- ES6 import/export syntax
- Astro components: `@astrojs/starlight/components`
- Loaders/schemas: `@astrojs/starlight/schema`

### Naming Conventions
- Config files: kebab-case (e.g., `astro.config.mjs`)
- Collections: camelCase (e.g., `docs`)
- Frontmatter: camelCase (e.g., `tagline`, `image`)

### Content Structure
- MDX files with frontmatter in `src/content/docs/`
- Organize with subdirectories and descriptive slugs
- Static assets in `public/`, images in `src/assets/`
- Multilingual content: root locale (Slovenian), `/en/` (English), `/hr/` (Croatian)
- Avoid H1 (`#`) titles in MD files when frontmatter `title` is set, as Starlight auto-renders it. Start content with H2 (`##`) or body text to prevent duplicate titles.

### Formatting
- 2-space indentation
- Single quotes for JS strings
- Trailing commas in objects/arrays

## Project Structure
- **Homepage**: `src/content/docs/index.mdx` (Slovenian), `src/content/docs/en/index.mdx` (English), `src/content/docs/hr/index.mdx` (Croatian)
- **CV/Biography**: `src/content/docs/zivljenjepis/` (Slovenian), `src/content/docs/en/cv/` (English), `src/content/docs/hr/biografija/` (Croatian)
- **Projects**: `src/content/docs/projekti/` (Slovenian), `src/content/docs/en/projects/` (English), `src/content/docs/hr/projekti/` (Croatian)
- **Guides**: `src/content/docs/navodila/` (Slovenian), `src/content/docs/en/guides/` (English), `src/content/docs/hr/upute/` (Croatian)
- **UI Translations**: `src/content/i18n/sl.json` (Slovenian), `src/content/i18n/hr.json` (Croatian)
- **Sidebar Translations**: Global sidebar with per-language translations using `translations` field
- **Custom Components**: `src/components/ThemeProvider.astro` (Dark theme default), `src/components/LanguageSelect.astro` (Custom language selector)
- **Assets**: `src/assets/samob.jpeg` (Profile picture)

## Features
- **Dark Theme Default**: Site loads in dark mode by default
- **Circular Profile Picture**: LinkedIn-style circular profile image on homepage
- **Social Links**: GitHub and LinkedIn integration
- **Multilingual**: Full i18n support for Slovenian, English, and Croatian
- **Custom Language Selector**: Flag + short code display (🇸🇮 Slo, 🇬🇧 En, 🇭🇷 Cro)