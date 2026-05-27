# TypeScript Config Pattern

This pattern is based on a pnpm monorepo with a shared config package and small per-workspace `tsconfig.json` files. Adapt package names to the target repo.

## Shared Config Package

Create or reuse a package such as `packages/config`.

Minimal `package.json` shape:

```json
{
  "name": "@scope/config",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    "./typescript/base": "./typescript/base.json",
    "./typescript/next": "./typescript/next.json",
    "./typescript/react-library": "./typescript/react-library.json"
  },
  "peerDependencies": {
    "typescript": ">=5"
  }
}
```

Use the repo's actual scope or unscoped package name.

## Base Preset

`packages/config/typescript/base.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Next Preset

`packages/config/typescript/next.json`:

```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "allowJs": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  }
}
```

## React Library Preset

`packages/config/typescript/react-library.json`:

```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true
  }
}
```

## Workspace tsconfig Examples

Next app:

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

React package:

```json
{
  "extends": "@scope/config/typescript/react-library",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## Scripts

Workspace package:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@scope/config": "workspace:*",
    "typescript": "^5"
  }
}
```

Root scripts can delegate through Turbo when multiple workspaces have `typecheck`:

```json
{
  "scripts": {
    "typecheck": "turbo typecheck"
  }
}
```

Add this Turbo task only after workspace scripts exist:

```json
{
  "tasks": {
    "typecheck": {
      "dependsOn": ["^typecheck"],
      "outputs": []
    }
  }
}
```

## Checklist

- Shared config package exports every preset it expects workspaces to import.
- Workspaces depend on the config package with `workspace:*`.
- Local `tsconfig.json` files only contain local paths/includes/excludes.
- Strictness lives in the base preset.
- `forceConsistentCasingInFileNames` is enabled.
- `typecheck` scripts exist before Turbo references them.
