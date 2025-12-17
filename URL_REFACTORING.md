# URL Refactoring Plan

This document outlines the steps to fix broken relative import paths and implement path aliases for better maintainability in the Astro/Starlight project.

## Issues Identified
- Extensive use of deep relative paths (e.g., `../../../` or `../../../../../../`) in MDX files, which are brittle and error-prone during refactors.
- Paths are incorrect in some files due to directory restructuring (e.g., moves from `/en/navodila/` to `/en/guides/` changed depths).
- This causes import failures, potentially making pages appear untranslated or broken.

## Step-by-Step Plan

### 1. Fix Broken Relative Import Paths
- Update all incorrect `../../../` paths in `/en/`, `/hr/`, and root files to correct depths.
- Affected files: Primarily index.mdx files in CV/biography subdirectories (e.g., `/en/cv/tehnicne-vescine/index.mdx`, `/hr/biografija/tehnicne-vescine/index.mdx`).
- Action: Replace overly deep paths like `../../../../../../assets/` with the correct number of `../` (typically 5-7 levels depending on file location).
- Example: In `/en/cv/tehnicne-vescine/index.mdx`, change `../../../../../assets/ollama-dolphin-terminal-chat.png` to `../../../../assets/ollama-dolphin-terminal-chat.png`.

### 2. Configure Path Aliases in astro.config.mjs
- Add Vite alias configuration to enable `~/` or `@/` prefixes for `src/` paths, avoiding long relative paths.
- Import required: `import { fileURLToPath, URL } from 'node:url';`
- Add under `vite.resolve.alias`:
  ```
  alias: {
    '~': fileURLToPath(new URL('./src', import.meta.url)),
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  ```
- Benefits: Shorter paths like `~/assets/samob.jpeg`, immune to depth changes.

### 3. Update Imports to Use Aliases
- Replace all relative paths with aliases (e.g., `../../../assets/` → `~/assets/`).
- Update files: All MDX files with imports (e.g., index.mdx in docs/, CV/, guides/).
- Run after alias config to ensure paths resolve correctly.

### 4. Verify and Test
- Run `npx astro check` to catch import errors.
- Build/dev server and test `/en/`, `/hr/` pages for proper loading and translations.
- Check browser console for 404s on assets; inspect `LanguageSelect.astro` if translation issues persist.

### 5. Documentation and Future Prevention
- Add alias usage to AGENTS.md.
- Train on avoiding deep relatives; prefer aliases for all `src/` imports.

## Estimated Time
- 1-2 hours for fixes and testing.

## Questions for User
- Prefer `~` or `@` for aliases?
- Confirm specific broken files if needed.