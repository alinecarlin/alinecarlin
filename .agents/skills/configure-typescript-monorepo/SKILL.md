---
name: configure-typescript-monorepo
description: Add reusable TypeScript configuration to a pnpm JavaScript/TypeScript monorepo using a shared config package pattern. Use when asked to configure TypeScript, add tsconfig files, create shared compiler presets, wire typecheck scripts, or standardize TypeScript settings for apps and packages. Prefer shared presets for base, Next apps, React libraries, and backend packages while adapting package names and workspace structure to the target project.
---

# Configure TypeScript Monorepo

## Workflow

1. Inspect the monorepo structure and package naming:
   - Root `package.json`.
   - `pnpm-workspace.yaml`.
   - Existing `apps/*` and `packages/*`.
   - Any existing `tsconfig*.json` files.
2. Add or update a shared config package, usually `packages/config`, unless the project already has an equivalent config package.
3. Create TypeScript presets as JSON files under the shared config package:
   - `typescript/base.json`.
   - `typescript/next.json` when Next apps exist or will be added.
   - `typescript/react-library.json` when React packages exist or will be added.
   - Add backend-specific presets only when a backend runtime exists.
4. Export the presets from the config package `package.json`.
5. Add `typescript` as a root dev dependency or workspace dependency according to the repo's dependency policy.
6. In each workspace, create a local `tsconfig.json` that extends the correct shared preset and only adds workspace-local paths, includes, and excludes.
7. Add `typecheck` scripts where TypeScript is actually configured.
8. Add Turbo `typecheck` tasks only after workspaces have `typecheck` scripts.
9. Run the available typecheck command and fix config issues.

Read `references/typescript-config-pattern.md` for the exact pattern and examples.

## Principles

- Keep strictness centralized in the base preset.
- Keep framework-specific behavior in framework presets.
- Keep each app/package `tsconfig.json` small.
- Prefer `moduleResolution: "Bundler"` for modern JS tooling and monorepos using Next/Vite/package exports.
- Preserve local conventions when a repo already has a working TypeScript strategy.
- Do not add ESLint, Prettier, app framework files, or unrelated tooling from this skill.
