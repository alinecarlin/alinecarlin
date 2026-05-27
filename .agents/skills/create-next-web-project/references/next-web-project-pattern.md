# Next Web Project Pattern

This pattern creates a Next.js app inside a pnpm/Turborepo monorepo while keeping shared UI, shadcn, TypeScript, and ESLint configuration in workspace packages.

Do not use a fixed scaffold script. Treat this as a step-by-step process and adapt names, scopes, package versions, and framework options to the target repo.

## Creation Sequence

1. Start with a pnpm/Turborepo monorepo foundation.
2. Run the official Next generator to create the app under `apps/<app-name>`.
3. Enable:
   - TypeScript.
   - `src` directory.
   - Tailwind.
   - App Router.
4. Clean generated dependencies and files.
5. Reinstall from a clean dependency state if the install graph was changed heavily.
6. Create or update `packages/ui`.
7. Configure shadcn latest in `packages/ui`.
8. Add the app-side shadcn/Tailwind CSS references required for the app stylesheet.
9. Wire `packages/ui` into the app.
10. Apply shared TypeScript and ESLint config from `packages/config`.
11. Configure metadata, SEO, providers, route groups, features, and validation commands.

## App Structure

Required app shape:

```text
apps/<app-name>/
  package.json
  next.config.ts
  postcss.config.mjs
  eslint.config.mjs
  tsconfig.json
  src/
    app/
      globals.css
      layout.tsx
      error.tsx
      not-found.tsx
    components/
    features/
    hooks/
    lib/
```

Use route groups when different route families need different shells:

```text
src/app/(site)/
src/app/(status)/
```

## App package.json Pattern

Keep scripts consistent:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint --fix",
    "lint:check": "eslint",
    "typecheck": "tsc --noEmit"
  }
}
```

Dependency placement rules:

- `next`, `react`, `react-dom`, app-only data libraries, and app-only runtime packages live in the app.
- `@scope/ui` is a workspace dependency.
- `@scope/config` is a dev dependency for TypeScript/ESLint presets.
- Shared UI primitives and shadcn component dependencies belong in `packages/ui`.
- Do not duplicate shadcn component source in the app when it belongs in `packages/ui`.

The existing repository keeps `shadcn` in the app because `apps/web/src/app/globals.css` imports `shadcn/tailwind.css`. Preserve this when the app CSS requires that package import.

## packages/ui Pattern

`packages/ui` centralizes shadcn components and shared UI configuration:

```text
packages/ui/
  components.json
  package.json
  src/
    components/
      ui/
      index.ts
    lib/
      utils.ts
      index.ts
    styles/
      globals.css
    index.ts
```

`components.json` points shadcn aliases at package-local paths, for example:

```json
{
  "tailwind": {
    "css": "./src/styles/globals.css",
    "cssVariables": true
  },
  "aliases": {
    "components": "#components",
    "utils": "#lib/utils",
    "ui": "#components/ui",
    "lib": "#lib",
    "hooks": "#hooks"
  }
}
```

`packages/ui/src/lib/utils.ts` provides `cn`:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

`packages/ui/src/index.ts` exports shared modules:

```ts
export * from './components'
export * from './lib'
```

Add icons, motion, styles, or other exports only when the package owns them.

Keep folder responsibilities clear:

```text
src/components/       React components and component compositions
src/components/ui/    shadcn primitives
src/hooks/            React hooks
src/lib/              utilities and helpers
src/styles/           shared CSS and theme mapping
src/motion/           motion presets, variants, constants, and helpers only
```

If a file exports a JSX-rendering component, keep it under `src/components` or a component subfolder such as `src/components/motion`. Do not place renderable components directly in utility folders like `src/motion` or `src/lib`.

## CSS Integration

The app global CSS should import Tailwind, animation helpers, shadcn Tailwind styles, scan `packages/ui/src`, and import shared UI globals.

Pattern:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@source "../../../../packages/ui/src/";

@import "@scope/ui/styles/globals.css";
```

Then define app-specific tokens in the app CSS:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --primary: 222 47% 11%;
    --primary-foreground: 0 0% 100%;
    --radius: 0.75rem;
  }
}
```

`packages/ui/src/styles/globals.css` should contain shared Tailwind theme mapping, utilities, and base styles that are intentionally shared by all apps.

## next.config.ts

Transpile shared workspace packages consumed by the app:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@scope/ui']
}

export default nextConfig
```

Add shared assets, contracts, or other workspace packages only when the app imports them.

## TypeScript

Use the shared Next preset from `packages/config`:

```json
{
  "extends": "@scope/config/typescript/next",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

Use `configure-typescript-monorepo` when the config package does not exist yet.

## ESLint

Use the shared Next ESLint preset:

```js
import nextConfig from '@scope/config/eslint/next'

export default nextConfig
```

Use `configure-eslint-monorepo` when the config package does not exist yet.

## Metadata and SEO

Root `src/app/layout.tsx` should export strong `Metadata`:

- title default and template;
- description;
- applicationName;
- authors;
- creator and publisher when applicable;
- keywords when useful;
- metadataBase for canonical/social URLs;
- alternates canonical;
- Open Graph title, description, URL, siteName, locale, type, and images;
- Twitter card, title, description, and images;
- robots rules.

Page routes should export page-specific metadata when title, description, canonical, robots, or social preview differs.

Never leave generic generated metadata in a production page.

## Components

Before creating any component:

1. Check `packages/ui` exports and source.
2. Check installed shadcn components in `packages/ui`.
3. Use the `shadcn` skill if available.
4. Use `create-shadcn-react-component` to search docs/registry before custom UI.
5. Install shadcn components into `packages/ui` and customize them for the project.
6. Create from scratch only when shadcn has no useful direct component or primitive.

## Validation Checklist

- Was the app created with the official Next generator?
- Does the app use `src`?
- Are `src/app`, `src/components`, `src/features`, `src/hooks`, and `src/lib` present?
- Is `packages/ui` the shadcn source of truth?
- Does app CSS import Tailwind, `tw-animate-css`, `shadcn/tailwind.css`, scan `packages/ui/src`, and import shared UI globals?
- Does `next.config.ts` transpile shared workspace packages?
- Does the app extend shared TypeScript and ESLint presets?
- Are dependencies placed in the correct app/package workspace?
- Is metadata/SEO configured with real product information?
- Were lint check, typecheck, and build run?
