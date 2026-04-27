# Boxtribute Copilot Instructions

Always follow these instructions and only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.

## Project Overview

Boxtribute is a humanitarian relief web application supporting the distribution of over 1 million items annually across 15+ locations in Europe and the Middle East.

## Code Structure

This is a **Next.js** application built with **TypeScript**, **React**, and **Tailwind CSS**. The codebase follows Next.js conventions:

- **`pages/`** - Next.js pages and routing (file-based routing)
- **`components/`** - Reusable React components
- **`lib/`** - Utility functions and helper modules
- **`interfaces/`** - TypeScript type definitions and interfaces
- **`data/`** - Static data files and content
- **`public/`** - Static assets (images, fonts, etc.)
- **`styles/`** - Global styles and Tailwind configuration
- **`@types/`** - Custom TypeScript type declarations

The project uses:
- **Leaflet** and **React Leaflet** for interactive maps
- **Headless UI** and **Heroicons** for accessible UI components
- **React Hook Form** for form handling
- **Remark** for Markdown processing

## General Instructions

**Think first and make a plan before you start implementing.** Always analyze the problem, understand the codebase, and create a clear implementation plan before making any changes.

**Always report issues with building/testing in the PR.** If you encounter build failures, test failures, or other issues during development, document them clearly in your progress reports so stakeholders are aware of any blockers or limitations.

## Essential Setup Commands

**Note**: These instructions complement the automated setup defined in `.github/workflows/copilot-setup-steps.yml`. The workflow file handles dependency installation in the Copilot environment, while these instructions are for manual development setup.

### Starting the Development Server

```bash
yarn dev
```

The website will be available at http://localhost:3000.

### Starting the Production Server

For production mode (requires build first):

```bash
yarn build
yarn start
```

The production server runs at http://localhost:3000.

## Code Quality and Pre-Commit Checks

Before committing code, ensure all linting and formatting checks pass:

### Linting

Auto-fix linting issues:

```bash
yarn lint
```

This runs ESLint with the `--fix` flag to automatically correct fixable issues.

### Code Formatting

Check code formatting:

```bash
yarn format:check
```

Auto-format all code:

```bash
yarn format:write
```

This uses Prettier to format `.js`, `.jsx`, `.json`, `.scss`, `.md`, `.ts`, and `.tsx` files.

### Type Checking

Verify TypeScript types:

```bash
yarn typecheck
```

## Validation Checklist

Before submitting a PR, ensure:

1. ✅ The development server starts successfully (`yarn dev`)
2. ✅ The website loads correctly at http://localhost:3000
3. ✅ All linting passes (`yarn lint`)
4. ✅ All formatting is correct (`yarn format:check`)
5. ✅ TypeScript compilation succeeds (`yarn typecheck`)
6. ✅ Include a screenshot of the running website in your PR

**Screenshot requirement**: Always include a screenshot showing the website, especially the edited page(s), successfully running at localhost:3000 to validate your changes work as expected.
