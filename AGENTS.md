# AGENTS.md

## Commands
- **Build**: `npm run build`
- **Dev server**: `npm run dev`
- **Preview**: `npm run preview`
- **Type check**: `npx astro check`
- **Lint**: No lint command configured
- **Test**: No test framework configured

## Code Style Guidelines

### TypeScript
- Use strict TypeScript (`astro/tsconfigs/strict`)
- Include `@ts-check` JSDoc comment in config files
- ES modules (`"type": "module"` in package.json)
- Type annotations for function parameters and return values in TypeScript files
- Use type assertions sparingly, prefer type guards

### Imports
- ES6 import/export syntax only
- Astro components: `@astrojs/starlight/components`
- Starlight loaders/schemas: `@astrojs/starlight/loaders`, `@astrojs/starlight/schema`
- Core Astro: `astro:content`, `astro:assets`, `astro/config`
- Node.js built-ins: `node:url`, `node:path`
- Use absolute imports with `~` alias for src/ directory (configured in vite.resolve.alias)

### Naming Conventions
- Config files: kebab-case with .mjs extension (e.g., `astro.config.mjs`)
- Collection names: camelCase (e.g., `docs`, `i18n`)
- Frontmatter fields: camelCase (e.g., `tagline`, `description`, `title`)
- Components: PascalCase (e.g., `ThemeProvider.astro`, `LanguageSelect.astro`)
- CSS class names: kebab-case or Starlight's built-in variables (--sl-*)
- Custom web elements: kebab-case with starlight prefix (e.g., `starlight-lang-select`)

### Formatting
- 2-space indentation (consistent across all files including Astro templates)
- Single quotes for JavaScript strings
- Trailing commas in multi-line objects and arrays
- Semicolons at end of statements (TypeScript/JS)
- No trailing whitespace

### Content Structure (MDX)
- MDX files with frontmatter in `src/content/docs/`
- Organize with subdirectories and descriptive slugs
- Static assets in `public/`, images in `src/assets/`
- Multilingual content: root locale (Slovenian), `/en/` (English), `/hr/` (Croatian)
- Avoid H1 (`#`) titles in MD files when frontmatter `title` is set - Starlight auto-renders it
- Start content with H2 (`##`) or body text to prevent duplicate titles
- Use frontmatter `translations` field for sidebar navigation labels

### Astro Components
- Frontmatter fence (`---`) for server-side code
- Use `is:inline` attribute on scripts to avoid FOUC (Flash of Unstyled Content)
- Separate server-side (frontmatter) and client-side (`<script>`) concerns
- Custom web elements defined in client-side scripts using `customElements.define`
- Use Astro's scoped `<style>` tags for component-specific styles
- Starlight components available: `Card`, `CardGrid`, `Tabs`, `TabItem`

### CSS/Styling
- Use Starlight CSS custom properties for consistency (`--sl-color-bg-nav`, `--sl-color-text`, etc.)
- Scoped styles in Astro components
- Global custom CSS loaded via `customCss` in Starlight config
- Use inline styles sparingly (only for dynamic values)
- Accessibility-focused: include `sr-only` class for screen-reader-only content
- Focus states with `outline: 2px solid var(--sl-color-accent); outline-offset: 2px;`

### Error Handling
- TypeScript strict mode catches most type errors at build time
- Runtime validation in custom web elements (instanceof checks)
- Defensive programming in client-side event handlers
- Use type guards for narrowing types

### i18n (Internationalization)
- UI strings in `src/content/i18n/{locale}.json`
- Use `Astro.locals.t()` for translations in components
- Sidebar translations using `translations` field in config
- Default locale is 'root' (Slovenian)
- Locale codes: 'root', 'en', 'hr'

### Type Safety
- Use Starlight's schemas: `docsSchema()`, `i18nSchema()`
- Loaders: `docsLoader()`, `i18nLoader()`
- Content collections defined in `src/content.config.ts`
- Type imports from `@astrojs/starlight/schema` and `@astrojs/starlight/loaders`

## Project Structure
- **Config**: `astro.config.mjs` (main), `tsconfig.json`, `src/content.config.ts`
- **Homepage**: `src/content/docs/index.mdx` (SL), `src/content/docs/en/index.mdx` (EN), `src/content/docs/hr/index.mdx` (HR)
- **CV/Biography**: `src/content/docs/cv/` (SL), `src/content/docs/en/cv/` (EN), `src/content/docs/hr/cv/` (HR)
- **Projects**: `src/content/docs/projects/` (SL), `src/content/docs/en/projects/` (EN), `src/content/docs/hr/projects/` (HR)
- **Guides**: `src/content/docs/guides/` (SL), `src/content/docs/en/guides/` (EN), `src/content/docs/hr/guides/` (HR)
- **UI Translations**: `src/content/i18n/en.json`, `src/content/i18n/hr.json`
- **Custom Components**: `src/components/ThemeProvider.astro`, `src/components/LanguageSelect.astro`, `src/components/ThemeSelect.astro`, `src/components/Lightbox.astro`
- **Assets**: `src/assets/` (images), `public/` (static files)

## Features & Patterns
- **Dark Theme Default**: Inline script sets default theme to dark to prevent FOUC
- **Circular Profile Picture**: LinkedIn-style with `border-radius: 50%`
- **Custom Language Selector**: Flag emojis + short codes (🇸🇮 Slo, 🇬🇧 En, 🇭🇷 Cro)
- **Dialog-based Lightbox**: Uses HTML `<dialog>` element with JavaScript for image viewing
- **Vite Alias**: `~` resolves to `src/` directory
- **Image Optimization**: Use `astro:assets` Image component for optimized images

## Development Workflow
- Always run type checking before committing: `npx astro check`
- Preview production builds locally with `npm run build && npm run preview`
- Use the dev server for rapid development with hot reload: `npm run dev`
- Content changes are auto-reloaded; config changes require dev server restart
- Images in `src/assets/` are processed by Sharp for optimization
- Images in `public/` are served as-is without optimization

## Accessibility & Content
- Use ARIA labels for icon-only buttons, `sr-only` class for screen-reader text
- Write in first-person for personal sections, use descriptive alt text
- Frontmatter required for all content files with `description` for SEO
- Link internal content with relative paths, use Starlight `icon` props (user, rocket, book, etc.)

## Common Patterns

### Image Import
```ts
import profileImage from '../../assets/samob.jpeg';
<img src={profileImage.src} alt="..." />
```

### Image Component (with optimization)
```astro
import { Image } from 'astro:assets';
<Image src={imageSrc} alt="..." loading="lazy" decoding="async" />
```

### Lightbox Component
```astro
<Lightbox id="unique-id" src={imageSrc} alt="..." />
```

### Sidebar Translations
```js
{ label: 'Življenjepis', translations: { en: 'CV', hr: 'Biografija' }, items: [...] }
```

### Custom Component Structure
```astro
---
import { Image } from 'astro:assets';
interface Props { src: ImageMetadata; alt: string; }
const { src, alt } = Astro.props;
---
<div>...</div>
<style>/* Scoped CSS */</style>
<script>customElements.define('x', class extends HTMLElement {});</script>
```

### Type Safety
- Types auto-generated in `.astro/types.d.ts`, use virtual imports
- Run `npx astro check` for validation

## Troubleshooting
- **Build fails**: Check missing frontmatter or incorrect file paths
- **Type errors**: Run `npx astro check` for detailed messages
- **Styling**: Verify no conflicts with Starlight CSS variables
- **i18n**: Ensure locale codes match config and file paths
- **Images**: Check import syntax and file paths
- **Theme FOUC**: Verify ThemeProvider has `is:inline` attribute
