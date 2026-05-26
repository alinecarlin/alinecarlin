# apps/web Pattern

Reverse-engineered from `apps/web` on 2026-05-26.

## Monorepo

- Package manager: `pnpm@10.33.0`.
- Workspace globs: `apps/*` and `packages/*`.
- Task runner: Turbo with `dev`, `build`, `lint`, `lint:check`, and `typecheck`.
- Shared packages:
  - `@alinecarlin/config`: central ESLint and TypeScript configs.
  - `@alinecarlin/ui`: shared UI components, utilities, motion helpers, and global styles.
  - `@alinecarlin/assets`: shared images and SVG assets.

## App Package

Use this baseline for a new app package:

```json
{
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint --fix",
    "lint:check": "eslint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@alinecarlin/assets": "workspace:*",
    "@alinecarlin/ui": "workspace:*",
    "@tanstack/react-query": "^5.100.11",
    "framer-motion": "^12.39.0",
    "lucide-react": "^1.14.0",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "shadcn": "^4.7.0",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@alinecarlin/config": "workspace:*",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4"
  }
}
```

## Required Config Files

`tsconfig.json`:

```json
{
  "extends": "@alinecarlin/config/typescript/next",
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

`eslint.config.mjs`:

```js
import nextConfig from '@alinecarlin/config/eslint/next'

export default nextConfig
```

`next.config.ts`:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@alinecarlin/ui', '@alinecarlin/assets']
}

export default nextConfig
```

`postcss.config.mjs`:

```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}

export default config
```

## CSS Baseline

`src/app/globals.css` must include:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@source "../../../../packages/ui/src/";

@import "@alinecarlin/ui/styles/globals.css";
```

After those imports, define app tokens in `@layer base`. `apps/web` defines brand colors, background/foreground, shadcn tokens, gradients, shadows, and dark mode tokens in this file.

## Source Structure

Baseline layout:

```text
src/
  app/
    globals.css
    layout.tsx
    error.tsx
    not-found.tsx
    (site)/
      layout.tsx
      page.tsx
  components/
    providers/
      react-query-provider.tsx
    site/
      header.tsx
      footer.tsx
  features/
    home/
      api/
      components/
      data/
      hooks/
      types/
```

Feature convention:

- `data/*.mock.ts`: typed static seed data.
- `api/get-*-data.ts`: async data function returning the feature type.
- `hooks/use-*-data.ts`: client React Query hook with a stable query key and `initialData`.
- `types/*.types.ts`: exported data contracts.
- `components/*-page.tsx`: client page composition when it uses hooks.

Root layout convention:

- Import `./globals.css`.
- Export typed `Metadata`.
- Render `<html lang="pt-BR" className="h-full antialiased">`.
- Render `<body className="flex min-h-full flex-col">`.
- Wrap children with `ReactQueryProvider`.

React Query defaults from `apps/web`:

- `staleTime`: 5 minutes.
- `gcTime`: 30 minutes.
- `refetchOnWindowFocus`: false.
- `refetchOnReconnect`: true.
- `retry`: 1.
