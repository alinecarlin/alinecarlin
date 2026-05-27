# Base PNPM/Turbo Monorepo Pattern

This pattern is intentionally minimal and reusable across JavaScript monorepos that may later add frontend apps, backend apps, shared UI packages, config packages, or domain packages.

Do not treat these examples as a rigid scaffold. Adapt names, scripts, and optional files to the target project.

## Target Tree

```text
.
  .gitattributes
  .gitignore
  .npmrc
  package.json
  pnpm-workspace.yaml
  turbo.json
  apps/
    .gitkeep
  packages/
    .gitkeep
```

`.npmrc` and `.gitkeep` files are optional. Create `.gitkeep` only when empty folders must be committed.

## Root package.json

Start minimal. Do not manually write `packageManager: "pnpm@latest"` and do not manually write `turbo: "latest"` as the final committed state.

Recommended sequence:

```bash
pnpm init
corepack enable
corepack use pnpm@latest
pnpm add -D turbo@latest -w
```

Then edit `package.json` to keep the root private and add only baseline scripts:

```json
{
  "name": "project-name",
  "private": true,
  "packageManager": "pnpm@<concrete-version-from-corepack>",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build"
  },
  "devDependencies": {
    "turbo": "<version-range-written-by-pnpm>"
  }
}
```

If no app has `dev` or `build` scripts yet, these commands may do little or fail until app/package skills add concrete workspaces. That is acceptable for a base monorepo.

## pnpm-workspace.yaml

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

## turbo.json

Keep Turbo minimal until tooling exists:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "build/**", ".next/**", "!.next/cache/**"]
    }
  }
}
```

Do not add `lint`, `typecheck`, `test`, or app-specific tasks until the project has those scripts.

## .npmrc

Use this only when the project should be forgiving about peer dependencies, which is often useful in evolving JS monorepos with frontend packages:

```text
auto-install-peers=true
strict-peer-dependencies=false
```

Skip `.npmrc` when the user wants strict dependency policy or when the project has no peer-heavy packages yet.

## .gitattributes

```text
* text=auto eol=lf
```

## Root .gitignore

Use a broad root ignore:

```text
# dependencies
node_modules
.pnpm-store

# env
.env
.env.*
!.env.example

# logs
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*

# build
dist
build
.next
out
.turbo
coverage
.cache
.output
.vercel

# OS
.DS_Store
Thumbs.db

# local data
*.db
*.db-journal
*.sqlite
*.sqlite3
```

## Empty Folders

Create:

```text
apps/.gitkeep
packages/.gitkeep
```

Remove those `.gitkeep` files later when real app or package folders are added.
