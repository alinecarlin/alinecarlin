---
name: create-next-web-project
description: Create a new Next.js web app inside a pnpm/Turborepo JavaScript monorepo using the official Next app generator, then adapt it to the repository standards: src structure, shared packages/ui shadcn setup, app CSS references, metadata and SEO, shared TypeScript config, shared ESLint config, and cleaned dependencies. Use when asked to create, initialize, scaffold, or add a new Next web project/app in a reusable monorepo pattern.
---

# Create Next Web Project

## Related Skills

Use these skills when available:

- `create-pnpm-turbo-monorepo`: create the base monorepo before adding the web app.
- `configure-web-app-standard`: enforce `src/app`, `src/components`, `src/features`, `src/hooks`, `src/lib`, metadata, SEO, and `packages/ui`.
- `create-shadcn-react-component`: search shadcn and `packages/ui` before creating components.
- `shadcn`: primary reference for shadcn CLI, docs, registry search, install/update/diff, composition, styling, icons, and forms.
- `configure-typescript-monorepo`: apply shared TypeScript config through `packages/config`.
- `configure-eslint-monorepo`: apply shared ESLint Flat Config through `packages/config`.
- `kebab-case-naming`: keep files and folders in kebab-case.
- `add-maintenance-comments`: add English comments where implementation intent is non-obvious.
- `distinctive-frontend`: apply high-quality, context-specific frontend design.

## Workflow

1. Confirm or create the monorepo base.
   - If the repo is not initialized, use the monorepo foundation pattern first.
   - Keep the web app creation separate from the monorepo creation step.
2. Create the Next app using the official Next generator.
   - Use the current package manager.
   - Create it under `apps/<app-name>`, commonly `apps/web`.
   - Enable `src`.
   - Enable TypeScript.
   - Enable Tailwind.
   - Use the app router unless the user explicitly requests otherwise.
3. Review and clean generated dependencies.
   - Remove packages that should live in another workspace package.
   - Move shared UI dependencies to `packages/ui` when they belong there.
   - Keep app-only runtime dependencies in the app.
   - Remove generated files that conflict with the monorepo standards.
4. Reinstall dependencies from a clean state when dependency shape changes significantly.
   - Remove stale install artifacts only when it is safe and intentional.
   - Recreate the lockfile with the chosen package manager.
   - Verify workspace dependency links.
5. Create or update `packages/ui`.
   - Configure shadcn latest there.
   - Install shadcn components into `packages/ui`.
   - Export shared components and utilities from the package entrypoint.
6. Configure shadcn access from the app.
   - Install or retain the app-side shadcn package/config pieces needed for CSS integration.
   - Ensure `apps/<app-name>/src/app/globals.css` imports Tailwind, `tw-animate-css`, `shadcn/tailwind.css`, scans `packages/ui/src`, and imports the shared UI global styles.
7. Configure the Next app to consume shared packages.
   - Add `transpilePackages` for `packages/ui` and any shared assets/contracts packages consumed by the app.
   - Add workspace dependencies such as `@scope/ui` and `@scope/config`.
8. Apply shared TypeScript config.
   - Extend the Next preset from the shared config package.
   - Keep local app paths/includes in the app `tsconfig.json`.
9. Apply shared ESLint config.
   - Import the Next ESLint preset from the shared config package.
   - Add `lint`, `lint:check`, and `typecheck` scripts.
10. Build the app structure.
   - Keep `src/app`, `src/components`, `src/features`, `src/hooks`, and `src/lib`.
   - Keep providers, shell, and route groups in the right place.
11. Configure metadata and SEO.
   - Add strong root metadata.
   - Add page-specific metadata when necessary.
   - Configure canonical URLs, Open Graph, Twitter cards, robots, and social image metadata for public routes.
12. Validate.
   - Run install, lint check, typecheck, and build.
   - Run the local dev server and inspect the app when frontend output changed.

Read `references/next-web-project-pattern.md` for the detailed pattern extracted from the existing repository.
