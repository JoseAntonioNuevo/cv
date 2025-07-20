# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a CV/Resume website built with Astro, React, and Tailwind CSS v4. The project is in its initial stages, with the basic framework set up but no content implemented yet.

## Tech Stack

- **Framework**: Astro v5.12.0 (static site generator)
- **UI Components**: React v19.1.0
- **Styling**: Tailwind CSS v4.1.11 (using new Vite plugin approach)
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

## Project Structure

```
cv/
├── src/
│   ├── pages/         # Astro pages (routes)
│   │   └── index.astro
│   └── styles/        # Global styles
│       └── global.css
├── public/            # Static assets
├── astro.config.mjs   # Astro configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## Key Configuration Details

1. **Astro Configuration** (`astro.config.mjs`):
   - React integration enabled for interactive components
   - Tailwind CSS v4 integrated via Vite plugin

2. **TypeScript** (`tsconfig.json`):
   - Extends Astro's strict preset
   - Strict mode enabled for better type safety

3. **Tailwind CSS v4**:
   - Using the new Vite plugin approach
   - No separate tailwind.config.js file needed
   - Imported via `@tailwind.css` in global.css

## Development Notes

- This is a fresh Astro project with minimal starter code
- The main page (`src/pages/index.astro`) needs to be developed with CV content
- React components can be added to `src/components/` for interactive elements
- Astro components (.astro files) are preferred for static content
- Use Tailwind CSS classes for styling
- The project uses Bun for faster package management and script execution