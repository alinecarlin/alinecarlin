---
name: configure-web-app-standard
description: Configure or create a React web application standard in a pnpm monorepo. Use when asked to create, structure, refactor, or standardize a web app with src/app/components/features/hooks/lib folders, robust metadata and SEO where needed, latest shadcn/ui setup, and a centralized packages/ui workspace for shared shadcn components and UI configuration. Always check packages/ui and shadcn before creating UI components from scratch.
---

# Configure Web App Standard

## Core Rules

- Every web app must use a `src` directory.
- Every web app must have these top-level source folders:
  - `src/app`
  - `src/components`
  - `src/features`
  - `src/hooks`
  - `src/lib`
- Configure metadata carefully wherever the framework supports it.
- Configure SEO wherever the page, route, or framework requires it.
- Configure shadcn/ui at the latest version.
- Centralize shadcn components and shared UI setup in `packages/ui`.
- If `packages/ui` does not exist yet, create it before adding shared UI components.
- Before creating any component, check whether it already exists in `packages/ui`.
- If no local component exists, check shadcn docs/registry for a matching or similar component.
- If shadcn has a matching or useful component, install it into `packages/ui` and customize it for the project.
- Create a component from scratch only when the need is highly specific and shadcn has no similar component or useful primitive.

## Related Skills

If available, use these skills together:

- `shadcn`: primary source for shadcn CLI, docs, registry search, component installation, composition, styling, forms, icons, and update rules.
- `create-shadcn-react-component`: component decision flow for searching shadcn before custom UI.
- `kebab-case-naming`: file and folder naming.
- `add-maintenance-comments`: English maintenance comments in code.
- `distinctive-frontend`: visual quality and non-generic UI direction.
- `configure-typescript-monorepo` and `configure-eslint-monorepo`: shared project tooling when needed.

## Workflow

1. Inspect the monorepo:
   - Root `package.json`.
   - `pnpm-workspace.yaml`.
   - Existing `apps/*`.
   - Existing `packages/ui`.
   - Existing `components.json`.
   - Existing shadcn config and installed components.
2. Standardize the web app source tree with `src/app`, `src/components`, `src/features`, `src/hooks`, and `src/lib`.
3. Configure or verify metadata and SEO for each relevant route/page/layout.
4. Ensure `packages/ui` exists and is part of the workspace.
5. Configure shadcn latest so its components and shared UI configuration live in `packages/ui`.
6. Before creating UI:
   - Check `packages/ui` for an existing component.
   - Check whether an existing component can be composed or extended.
   - Search shadcn docs/registry.
   - Install and customize shadcn components when available.
7. Add app-specific feature components under `src/features/<feature>`.
8. Keep app-level shell/layout components under `src/components`.
9. Keep reusable hooks in `src/hooks` and app-local utilities in `src/lib`.
10. Validate with available lint, typecheck, build, and browser checks.

Read `references/web-app-standard-pattern.md` for structure, metadata/SEO, `packages/ui`, and shadcn decision rules.
