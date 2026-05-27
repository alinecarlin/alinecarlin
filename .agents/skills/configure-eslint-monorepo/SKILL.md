---
name: configure-eslint-monorepo
description: Add reusable ESLint Flat Config to a pnpm JavaScript/TypeScript monorepo using a shared config package pattern. Use when asked to configure ESLint, create eslint.config.mjs files, add shared lint presets, standardize lint scripts, integrate Prettier, or configure ESLint for Next apps and React library packages. Prefer shared base, Next, and React library presets while adapting package names and workspace structure to the target project.
---

# Configure ESLint Monorepo

## Workflow

1. Inspect the monorepo structure and package naming:
   - Root `package.json`.
   - `pnpm-workspace.yaml`.
   - Existing `eslint.config.*` files.
   - Any shared config package.
   - Existing app/package scripts.
2. Add or update a shared config package, usually `packages/config`, unless the project already has one.
3. Create ESLint Flat Config presets under the shared config package:
   - `eslint/base.mjs`.
   - `eslint/next.mjs` when Next apps exist or will be added.
   - `eslint/react-library.mjs` when React packages exist or will be added.
4. Export the presets from the config package `package.json`.
5. Install the required ESLint dependencies in the right workspace scope.
6. Add a root `eslint.config.mjs` that imports the shared base preset.
7. Add local `eslint.config.mjs` files in apps/packages that import the matching shared preset.
8. Add `lint` and `lint:check` scripts where ESLint is configured.
9. Add Turbo lint tasks only after workspaces have lint scripts.
10. Run the available lint check and fix config or rule issues.

Read `references/eslint-config-pattern.md` for the exact pattern and examples.

## Principles

- Use ESLint Flat Config, not legacy `.eslintrc`.
- Keep shared rules in a config package and keep workspace configs tiny.
- Keep formatting integration centralized if the repo uses Prettier through ESLint.
- Prefer import ordering rules that are deterministic and easy to auto-fix.
- Avoid duplicate plugin registration when composing framework configs.
- Do not add TypeScript configs, framework source files, or unrelated tooling from this skill.
