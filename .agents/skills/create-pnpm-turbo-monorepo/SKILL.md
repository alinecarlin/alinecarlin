---
name: create-pnpm-turbo-monorepo
description: Create a reusable JavaScript monorepo foundation with pnpm and Turborepo for projects that will later add frontend and backend apps. Use when asked to initialize, bootstrap, or create a new pnpm/turbo monorepo base with only repository-level setup: package.json, pnpm-workspace.yaml, turbo.json, .gitignore, .gitattributes, optional .npmrc, and empty apps and packages folders. Do not use this skill to create concrete apps, APIs, ESLint config, TypeScript config, framework setup, or product-specific packages.
---

# Create PNPM Turbo Monorepo

## Workflow

Create the monorepo foundation as editable project files, not from a fixed scaffold script. Treat the reference as a pattern to adapt, not as code to apply blindly.

1. Confirm the target directory. If the user did not specify one, use the current working directory or create a new directory from the project name.
2. Initialize a minimal root `package.json`.
3. Use Corepack to select the current pnpm release instead of hand-writing `pnpm@latest`:

```bash
corepack enable
corepack use pnpm@latest
```

Keep the concrete `packageManager` value that Corepack writes.

4. Install Turborepo through pnpm instead of hard-coding a version:

```bash
pnpm add -D turbo@latest -w
```

Keep the resolved version range that pnpm writes.

5. Create only the base workspace structure:

```text
apps/
packages/
```

Use `.gitkeep` files only if empty directories need to be committed.

6. Add the base repository files:
   - `pnpm-workspace.yaml`.
   - `turbo.json`.
   - Root `.gitignore`.
   - `.gitattributes`.
   - `.npmrc` only when the project should use forgiving peer dependency behavior.
7. Do not create concrete app folders, package manifests inside apps, framework files, ESLint config, TypeScript config, database config, CI, Docker, README, or app-specific scripts unless the user explicitly asks.
8. Run `pnpm install` after the files are in place when network access is available.

## Baseline Decisions

- Use `apps/*` and `packages/*` as pnpm workspace globs.
- Keep root scripts limited to commands that make sense before apps exist, usually `dev` and `build`.
- Keep Turbo tasks minimal. Add `lint`, `typecheck`, or test tasks only after the corresponding tool exists.
- Prefer generated/pinned package manager metadata from Corepack over placeholder values such as `pnpm@latest`.
- Prefer package-manager-installed dependency versions over manually typed `latest` in `package.json`.
- Keep this skill focused on repository foundation. Use other skills to add concrete frontend, backend, UI, config, or tooling packages.

Read `references/base-monorepo-pattern.md` for the recommended file contents and rationale.
