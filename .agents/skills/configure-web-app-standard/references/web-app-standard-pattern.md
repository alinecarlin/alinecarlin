# Web App Standard Pattern

This pattern is for React web apps in a pnpm monorepo. Adapt framework details to the target project, but keep the source structure and shared UI principles.

## Required Source Structure

Every web app uses `src`:

```text
apps/<web-app>/
  src/
    app/
    components/
    features/
    hooks/
    lib/
```

Folder responsibilities:

- `src/app`: routing, layouts, route-level pages, metadata, SEO entrypoints, framework route files, global styles when framework convention requires it.
- `src/components`: app-level reusable components such as shell, providers, navigation, layout, route wrappers, and app-specific shared compositions.
- `src/features`: domain or product features. Prefer `src/features/<feature>/components`, `api`, `data`, `hooks`, `types`, and `lib` when needed.
- `src/hooks`: app-wide hooks reused across features.
- `src/lib`: app-local utilities, adapters, config helpers, metadata helpers, and non-UI helpers.

Do not scatter feature-specific code directly under `src/components` when it belongs to one feature.

## Metadata and SEO

Always configure metadata where the framework supports it.

For Next-style App Router projects:

- Add strong root metadata in `src/app/layout.tsx`.
- Use per-page metadata when a route needs a distinct title, description, canonical URL, indexability, Open Graph, Twitter card, robots, alternates, or structured intent.
- Prefer metadata helper functions in `src/lib` when metadata is reused or generated.
- Set `metadataBase` when absolute social URLs, canonical URLs, or Open Graph images are used.
- Add route-specific `canonical` paths where relevant.
- Configure `robots` deliberately:
  - public marketing/content pages: index/follow when appropriate;
  - private, app, admin, auth, staging, error, or status-only pages: noindex when appropriate.
- Include Open Graph and Twitter metadata for public pages.
- Use descriptive image alt text for social images.

For non-Next React apps:

- Use the router/framework's metadata or head-management approach.
- Ensure title, description, canonical URL, robots, social tags, favicon, and relevant structured metadata are covered where applicable.

Metadata should be written for the actual product and audience. Avoid placeholder titles and generic descriptions.

## Shared UI Package

Use `packages/ui` as the central package for shadcn components and shared UI configuration.

If it does not exist, create it before adding shared UI components:

```text
packages/ui/
  package.json
  components.json
  src/
    components/
      ui/
    hooks/
    lib/
    styles/
    index.ts
```

Adapt the exact paths to the shadcn project context, but keep the package as the shared UI source of truth.

The package should own:

- shadcn installed component source;
- shared UI primitives;
- shared UI utilities such as `cn`;
- shared UI styles/tokens when the project uses a central style package;
- component exports used by apps.

Apps should import shared UI from `packages/ui` instead of duplicating shadcn components locally.

### UI Package Folder Boundaries

Keep renderable React components under `src/components`, even when the component is related to motion, layout, feedback, data display, or another concern.

Use concern-specific folders only for non-rendering utilities:

```text
src/components/       React components and component compositions
src/components/ui/    shadcn primitives
src/hooks/            React hooks
src/lib/              utilities and helpers
src/styles/           shared CSS and theme mapping
src/motion/           motion presets, variants, constants, and helpers only
```

If a file exports a JSX-rendering component, place it in `src/components` or a component subfolder such as `src/components/motion`. Do not place renderable components directly in utility folders like `src/motion` or `src/lib`.

## Shadcn Setup

Use the latest shadcn CLI through the project package runner:

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest info --json
pnpm dlx shadcn@latest search -q "<component>"
pnpm dlx shadcn@latest docs <component>
pnpm dlx shadcn@latest add <component>
```

Use `npx` or `bunx` instead when that matches the project.

When a local `shadcn` skill is available, follow it for:

- CLI command details;
- registry search;
- docs and examples;
- add/update/diff workflow;
- styling rules;
- form rules;
- composition rules;
- icon rules;
- alias and path handling.

## Component Creation Decision Flow

Before creating any component:

1. Search `packages/ui` exports and source files.
2. If a suitable component exists, reuse or compose it.
3. If not, check whether an installed shadcn component in `packages/ui` can solve the need.
4. If missing, search shadcn registry/docs.
5. If shadcn has a matching or similar primitive, install it into `packages/ui`.
6. Customize it through tokens, variants, composition, wrappers, and project-specific props.
7. Create from scratch only when the component is domain-specific and shadcn has no useful match.

Examples:

```text
notification message     -> Alert
empty table state        -> Empty
loading block            -> Skeleton or Spinner
confirmation flow        -> AlertDialog
settings panel           -> Tabs + Card + Field components
status marker            -> Badge
form field               -> Field + Input/Select/Switch/etc.
side panel               -> Sheet
```

## App vs UI Package Boundaries

Put in `packages/ui`:

- generic UI primitives;
- shadcn components;
- reusable composed UI components used by multiple apps;
- design-system utilities;
- shared styles and tokens.

Inside `packages/ui`, keep renderable components in `src/components`. Use folders such as `src/motion`, `src/lib`, or `src/styles` only for non-rendering support code.

Put in `apps/<web-app>/src/components`:

- app shell;
- app-only navigation;
- app-only providers;
- layout compositions tightly coupled to one app.

Put in `apps/<web-app>/src/features/<feature>`:

- feature-specific sections;
- feature-specific forms;
- page-level feature compositions;
- feature data hooks and mock adapters.

## Validation Checklist

- Does the web app use `src`?
- Are `src/app`, `src/components`, `src/features`, `src/hooks`, and `src/lib` present?
- Is metadata configured at root and per route where needed?
- Is SEO configured for public pages and restricted pages correctly marked?
- Does `packages/ui` exist and own shared shadcn components?
- Was shadcn latest configured through the project package runner?
- Was `packages/ui` checked before creating a component?
- Was shadcn searched before creating custom UI?
- Were matching shadcn components installed and customized instead of rebuilding from scratch?
- Are app-specific and shared UI boundaries respected?
