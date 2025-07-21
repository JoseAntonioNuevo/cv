# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a fully-developed multilingual CV/Resume website built with Astro, React, and Tailwind CSS. The site supports English and Spanish with a comprehensive internationalization system and modern web standards including dark mode, responsive design, and accessibility features.

## Tech Stack

- **Framework**: Astro v5.12.0 (static site generator)
- **UI Components**: React v19.1.0 for interactive components
- **Styling**: Tailwind CSS v3.4.0 with dark mode support
- **Icons**: React Icons v5.5.0
- **Language**: TypeScript (strict mode enabled)
- **Package Manager**: Bun

## Essential Commands

```bash
# Install dependencies
bun install

# Start development server (runs on http://localhost:4321)
bun dev

# Build for production (outputs to ./dist/)
bun build

# Preview production build locally
bun preview

# Run Astro CLI commands
bun astro <command>
```

## Architecture & Key Systems

### Internationalization (i18n) System

The site uses a comprehensive translation system with language detection and clean URL routing:

- **Supported Languages**: English (default) and Spanish
- **URL Structure**: `/` (English), `/es/` (Spanish)
- **Translation Files**: `src/i18n/translations.ts` - strongly typed nested translation objects
- **Utilities**: `src/i18n/utils.ts` provides `useTranslations()`, `getLangFromUrl()`, `getLocalizedPath()`
- **Component Integration**: All components accept `lang` prop and use `const t = useTranslations(lang)`

### Layout Architecture

The site uses a single-page application structure in `src/layouts/Layout.astro`:
- All sections rendered sequentially: Header → Main → Technologies → Experience → Studies → Portfolio → Contact → Footer
- Language detection via `getLangFromUrl(Astro.url)`
- Dark mode initialization script prevents flash

### Component Patterns

1. **Astro Components** (`.astro` files): Server-side rendered static content
   - Use frontmatter for logic and imports
   - Props typing with TypeScript interfaces
   - Translation integration: `const t = useTranslations(lang)`

2. **React Components** (`.tsx` files): Interactive components only
   - Must be hydrated with `client:load` directive
   - Example: `ThemeToggle.tsx` for dark mode switching

### Styling Conventions

- **Global Styles**: Minimal `src/styles/global.css` - imports Tailwind only
- **Dark Mode**: Class-based (`dark:` prefix) with localStorage persistence
- **Component Styles**: Use Astro's `<style>` blocks with `@apply` directive
- **Color Palette**: Consistent indigo/blue accents with gray scales

### Key Configuration Files

1. **`astro.config.mjs`**: 
   - React integration enabled
   - Tailwind CSS integration
   - i18n configuration with `prefixDefaultLocale: false`

2. **`tailwind.config.mjs`**: 
   - Dark mode enabled (`darkMode: 'class'`)
   - Scans all source files

3. **`tsconfig.json`**: 
   - Extends Astro's strict preset
   - JSX configured for React

## Content Structure

### Experience Data
The `src/components/Experience.astro` component contains structured career data with:
- Company information with logos and technologies
- Multiple positions per company with periods, descriptions, and achievements
- Automatic sorting by date (most recent first)
- Full translation support

### Translation Keys Structure
Translations are organized by section: `nav`, `hero`, `about`, `experience`, `education`, `skills`, `projects`, `contact`, `footer`. Access via dot notation: `t('experience.companies.recovo.positions.fullstack')`

### Static Assets
- Company logos: `public/experience/`
- Profile images: `public/`
- CV PDF files: `public/cv/`

## Component Architecture

### Main Sections
- **Header**: Fixed navigation with language switcher and theme toggle
- **Main**: Hero section with profile description and CTA buttons
- **Technologies**: Tech stack showcase with icons
- **Experience**: Career timeline with detailed position information
- **Studies**: Education and certifications
- **Portfolio**: Project showcase
- **Contact**: Contact form and social links
- **Footer**: Simple footer with rights information

### Interactive Components
- **LanguageSwitcher**: Dropdown with flag icons, uses i18n utilities
- **ThemeToggle**: React component with dark/light mode switching
- **ContactForm**: Form handling with validation (if implemented)

## Development Guidelines

### Adding New Content
1. For static content: Create `.astro` components, add translations to `src/i18n/translations.ts`
2. For interactive features: Create `.tsx` React components, hydrate with `client:load`
3. Always provide translations for both English and Spanish
4. Follow existing component patterns for props and styling

### Translation Workflow
1. Add English keys to `translations.ts` under appropriate section
2. Add corresponding Spanish translations
3. Use `t('section.key')` in components with proper TypeScript typing
4. Test both language versions

### Styling Guidelines
- Use Tailwind utilities following existing patterns
- Implement dark mode variants with `dark:` prefix
- Ensure responsive design with mobile-first approach
- Use consistent color palette (indigo/blue accents, gray scales)

## URL Structure & Routing

- English (default): `/` 
- Spanish: `/es/`
- Both routes use same layout with language detection
- Language switching preserves current page context