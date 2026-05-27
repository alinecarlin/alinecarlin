---
name: kebab-case-naming
description: Standardize file and folder names as kebab-case across JavaScript/TypeScript projects and monorepos. Use when creating, renaming, moving, reviewing, or organizing files and directories, including React/Vue/Svelte component files and component folders. Enforce lowercase words separated by hyphens for discretionary file and folder names while preserving exact framework, tool, package manager, and operating-system filenames that must have reserved names.
---

# Kebab Case Naming

## Rule

Use kebab-case for every discretionary file and folder name:

```text
lowercase-words-separated-by-hyphens
```

Apply this to source files, folders, feature folders, component files, component folders, hooks, utilities, services, API modules, tests, fixtures, assets, docs, and generated project files whenever the name is under project control.

## Component Naming

Component exports stay in the language/framework convention, but files and folders stay kebab-case.

Examples:

```text
user-profile-card.tsx        -> export function UserProfileCard()
media-kit-page.tsx           -> export function MediaKitPage()
dashboard-shell/index.tsx    -> export function DashboardShell()
```

Avoid PascalCase component filenames:

```text
UserProfileCard.tsx
MediaKitPage.tsx
DashboardShell.tsx
```

Prefer:

```text
user-profile-card.tsx
media-kit-page.tsx
dashboard-shell.tsx
```

## Naming Rules

- Use lowercase ASCII letters, digits, and hyphens.
- Separate words with a single hyphen.
- Keep file extensions lowercase.
- Keep meaningful suffixes in kebab-case: `user-card.test.tsx`, `get-user-data.ts`, `auth-service.ts`, `route-handler.ts`.
- Prefer descriptive names over vague names: `billing-summary-card.tsx` instead of `card.tsx` when the file is not local-only.
- Keep existing conventional singleton names when they are already simple lowercase words: `index.ts`, `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx`.
- For hidden project files, preserve the leading dot and apply the rule to the meaningful name when possible.

## Reserved Name Exceptions

Preserve exact filenames required by tools, frameworks, package managers, or operating systems. Do not rename these just to satisfy kebab-case.

Common examples:

```text
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
tsconfig.json
jsconfig.json
next.config.ts
vite.config.ts
postcss.config.mjs
tailwind.config.ts
components.json
.gitignore
.gitattributes
.npmrc
.env
.env.example
README.md
LICENSE
Dockerfile
```

If a tool requires a specific case-sensitive name, follow the tool.

## Rename Workflow

When renaming existing files or folders:

1. Inspect imports, exports, route conventions, config references, test paths, docs links, and package entrypoints before renaming.
2. Rename with a filesystem-aware move so case-only changes work on case-insensitive filesystems.
3. Update all imports and references.
4. Preserve public API export names unless the user asked to change the API.
5. Run available checks for the touched project, usually lint, typecheck, tests, or build.

## Review Checklist

- Are all new discretionary files and folders kebab-case?
- Are component files kebab-case even when the exported component is PascalCase?
- Did reserved tool/framework filenames keep their exact required names?
- Did imports and references update after renames?
- Did the change avoid broad unrelated renames?
