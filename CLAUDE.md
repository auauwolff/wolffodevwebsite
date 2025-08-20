# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based portfolio/business website for Wolffo Dev, built with:
- **Astro** (v5.9.3) - Static site generator with component islands architecture
- **React** - Used for interactive components via @astrojs/react integration
- **Tailwind CSS** with DaisyUI** - Styling framework with custom theme configuration
- **Nanostores** - State management for cross-component reactivity (e.g., menu state)
- **TypeScript** - Type safety configured for both Astro and React components

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally

# Code Quality
npx prettier --write .    # Format all files
npx prettier --check .    # Check formatting without changes
npx astro check           # Type-check Astro components
```

## Architecture & Key Patterns

### Component Structure
- **Astro Components** (`.astro`): Default for static content and layouts
  - Located in `src/components/` and `src/components/sections/`
  - Use frontmatter (---) for props and imports
- **React Components** (`.tsx`): For interactive elements requiring client-side JS
  - Must be imported into Astro components with client directives (e.g., `client:load`)
  - Example: `MenuButton.tsx` uses nanostores for global state

### Global State Management
- Uses `nanostores` with atoms for simple reactive state
- Store definitions in `src/stores/GlobalStore.ts`
- React components access via `@nanostores/react` hooks

### Styling Approach
- Tailwind CSS with custom DaisyUI theme (`mytheme`) defined in `tailwind.config.cjs`
- Theme colors: primary (#2137FF), secondary (#7C7C7A), neutral (#000000)
- Global styles in `src/styles/global.css` (imported in MainLayout)
- Prefer utility classes over custom CSS

### Page Structure
- Pages in `src/pages/` become routes automatically
- Main layout wrapper: `src/layouts/MainLayout.astro` (includes SEO, meta tags)
- Component sections compose pages (Hero, Footer, etc.)

### Asset Management
- Static assets in `public/` (served at root)
- Component-specific images in `src/assets/images/`
- Icons in `src/icons/` (used with astro-icon integration)

## Important Configuration

### Build Output
- Static site generation (`output: "static"` in astro.config.mjs)
- Site URL: `https://wolffodev.netlify.app/`
- Sitemap generation enabled

### Integrations
- Tailwind with `applyBaseStyles: false` (custom global.css used)
- React for interactive components
- Sitemap for SEO
- astro-icon for SVG icon management

### TypeScript
- Extends Astro's base config
- Configured for React JSX (`jsx: "react-jsx"`)

## Development Notes

- The site uses a custom DaisyUI theme, avoid overriding theme variables directly
- ContactModal and SideDrawerMenu components use global state from nanostores
- FeatureProjects section is currently commented out in index.astro
- Build warnings about "mobilehero" SVG can be ignored (non-critical icon issue)
- When adding new sections, follow the existing pattern in `src/components/sections/`