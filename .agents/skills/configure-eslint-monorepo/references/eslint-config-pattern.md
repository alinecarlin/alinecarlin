# ESLint Config Pattern

This pattern is based on ESLint Flat Config in a pnpm monorepo with a shared config package. Adapt package names to the target repo.

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
    "./eslint/base": "./eslint/base.mjs",
    "./eslint/next": "./eslint/next.mjs",
    "./eslint/react-library": "./eslint/react-library.mjs"
  },
  "peerDependencies": {
    "@eslint/js": ">=9",
    "eslint": ">=9",
    "eslint-config-next": ">=16",
    "eslint-config-prettier": ">=10",
    "eslint-plugin-import": ">=2",
    "eslint-plugin-import-helpers": ">=2",
    "eslint-plugin-prettier": ">=5",
    "prettier": ">=3",
    "prettier-plugin-tailwindcss": ">=0",
    "typescript": ">=5",
    "typescript-eslint": ">=8"
  }
}
```

Use the repo's actual scope or unscoped package name. Include only peer dependencies for presets that exist.

## Base Preset

`packages/config/eslint/base.mjs`:

```js
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginImportHelpers from 'eslint-plugin-import-helpers'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const eslintConfig = [
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    plugins: {
      import: eslintPluginImport,
      'import-helpers': eslintPluginImportHelpers
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          arrowParens: 'avoid',
          trailingComma: 'none',
          endOfLine: 'auto',
          printWidth: 120,
          tabWidth: 2,
          plugins: ['prettier-plugin-tailwindcss'],
          tailwindFunctions: ['cva', 'cn', 'clsx', 'classNames', 'cx', 'tv', 'twMerge']
        }
      ],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['module', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ]
    }
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/.turbo/**',
      '**/next-env.d.ts'
    ]
  }
]

export default eslintConfig
```

## React Library Preset

`packages/config/eslint/react-library.mjs`:

```js
import tseslint from 'typescript-eslint'

import baseConfig from './base.mjs'

const eslintConfig = [
  ...tseslint.configs.recommended,
  ...baseConfig,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
]

export default eslintConfig
```

Only include React-specific rules that are supported by installed plugins/configs. If no React plugin is installed, omit React-plugin rules or install the plugin intentionally.

## Next Preset

`packages/config/eslint/next.mjs`:

```js
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

import baseConfig from './base.mjs'

const baseConfigWithoutImportPlugin = baseConfig.map(config => {
  if (!config.plugins?.import) {
    return config
  }

  return {
    ...config,
    plugins: Object.fromEntries(Object.entries(config.plugins).filter(([name]) => name !== 'import'))
  }
})

const eslintConfig = [...nextVitals, ...nextTs, ...baseConfigWithoutImportPlugin]

export default eslintConfig
```

The import plugin is removed from the base config before composing with Next to avoid duplicate plugin registration.

## Root Config

`eslint.config.mjs`:

```js
import baseConfig from './packages/config/eslint/base.mjs'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/.turbo/**',
      '**/next-env.d.ts'
    ]
  },
  ...baseConfig
]
```

## Workspace Config Examples

Next app:

```js
import nextConfig from '@scope/config/eslint/next'

export default nextConfig
```

React package:

```js
import reactLibraryConfig from '@scope/config/eslint/react-library'

export default reactLibraryConfig
```

## Scripts

Workspace package:

```json
{
  "scripts": {
    "lint": "eslint --fix",
    "lint:check": "eslint"
  },
  "devDependencies": {
    "@scope/config": "workspace:*"
  }
}
```

Root scripts can delegate through Turbo when multiple workspaces have lint scripts:

```json
{
  "scripts": {
    "lint": "turbo lint",
    "lint:check": "turbo lint:check"
  }
}
```

Add Turbo tasks only after workspace scripts exist:

```json
{
  "tasks": {
    "lint": {
      "dependsOn": ["^lint"],
      "outputs": []
    },
    "lint:check": {
      "dependsOn": ["^lint:check"],
      "outputs": []
    }
  }
}
```

## Checklist

- Flat Config is used.
- Shared config package exports every preset workspaces import.
- Workspaces depend on the config package with `workspace:*`.
- Required ESLint, Prettier, TypeScript, and framework dependencies are installed where the repo expects them.
- Next config avoids duplicate import plugin registration.
- `lint` and `lint:check` scripts exist before Turbo references them.
- Run `pnpm lint:check` or the relevant workspace lint command.
