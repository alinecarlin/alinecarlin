---
name: create-next-web-app
description: Create a new Next.js app inside this pnpm/turbo monorepo following the existing apps/web pattern. Use when Codex is asked to scaffold, add, clone, or create another Next project/app in the style of apps/web, including Next 16, React 19, Tailwind v4, @alinecarlin/config, @alinecarlin/ui, @alinecarlin/assets, React Query providers, App Router route groups, and feature-based src/features organization.
---

# Create Next Web App

## Workflow

1. Inspect the current repository before making changes:
   - Read `apps/web/package.json`, `apps/web/tsconfig.json`, `apps/web/next.config.ts`, `apps/web/src/app/globals.css`, and nearby feature folders if they changed since this skill was written.
   - Read `references/apps-web-pattern.md` for the extracted baseline pattern.
2. Choose the new app folder name. Use the user's name if provided; otherwise use a short kebab-case name under `apps/`.
3. Prefer the scaffold script for a fresh app:

```bash
python .agents/skills/create-next-web-app/scripts/scaffold_next_web_app.py --name <app-name> --display-name "<Human Name>"
```

4. Customize the generated app for the user's domain instead of leaving generic copy. Keep the architecture:
   - `src/app` for App Router, metadata, layouts, errors, and route groups.
   - `src/components` for app-level shared components such as providers and site shell.
   - `src/features/<feature>` for feature pages with `api`, `data`, `hooks`, `types`, and `components`.
5. If the app needs a different visual identity, edit `src/app/globals.css` tokens and metadata, but preserve Tailwind v4 imports, `@source "../../../../packages/ui/src/"`, and `@import "@alinecarlin/ui/styles/globals.css"`.
6. Validate from the repository root:

```bash
pnpm --dir apps/<app-name> lint:check
pnpm --dir apps/<app-name> typecheck
pnpm --dir apps/<app-name> build
```

Use the root `turbo` scripts only after adding matching root package scripts or when validating all apps.

## Scaffold Script

`scripts/scaffold_next_web_app.py` creates a minimal app that matches the `apps/web` conventions without depending on network access or `create-next-app`.

Useful options:

```bash
python .agents/skills/create-next-web-app/scripts/scaffold_next_web_app.py --name portal
python .agents/skills/create-next-web-app/scripts/scaffold_next_web_app.py --name creator-hub --display-name "Creator Hub" --description "Creator operations portal"
python .agents/skills/create-next-web-app/scripts/scaffold_next_web_app.py --name portal --update-root-scripts
```

The script refuses to overwrite an existing app unless `--force` is passed. Use `--force` only when the user explicitly wants replacement or the target was just generated and is safe to recreate.
Root `package.json` scripts are not updated by default to avoid broad JSON formatting churn. Pass `--update-root-scripts` only when the user wants app-specific root shortcuts such as `dev:<app-name>`.

## Manual Rules

- Keep dependency versions aligned with `apps/web/package.json`.
- Keep `@alinecarlin/config` for ESLint and TypeScript inheritance instead of duplicating config.
- Keep `next.config.ts` transpiling `@alinecarlin/ui` and `@alinecarlin/assets`.
- Keep `ReactQueryProvider` as a client provider under `src/components/providers`.
- Use `@/*` as the only app-local import alias.
- Use `@alinecarlin/ui` for shared UI primitives and `@alinecarlin/assets` for shared brand assets when appropriate.
- Prefer feature-local `data/*.mock.ts`, `api/get-*.ts`, `hooks/use-*.ts`, and `types/*.types.ts` files over embedding page data directly in components.
- Use route groups such as `(site)` and `(status)` when the layout shell or page class differs.
- Do not add new package managers or duplicate monorepo config in the app.
