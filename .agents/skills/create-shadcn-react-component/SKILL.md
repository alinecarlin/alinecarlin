---
name: create-shadcn-react-component
description: Create React components following shadcn/ui conventions. Use when asked to build, add, refactor, compose, or customize a React UI component in a project that uses shadcn/ui or has a components.json file. Always check whether a similar component already exists in shadcn before creating custom code from scratch; install the shadcn component first when available, then customize it for the project.
---

# Create Shadcn React Component

## First Rule

If a local skill named `shadcn` is available, use it first and follow its workflow, CLI rules, component docs flow, composition rules, styling rules, and update rules. Treat this skill as a decision layer for React component creation, not as a replacement for the dedicated `shadcn` skill.

When both skills apply:

1. Load and follow `shadcn`.
2. Use this skill to enforce the project-level rule: search shadcn before writing custom UI.
3. Return to `shadcn` rules for installation, documentation, composition, styling, icons, forms, and accessibility details.

## Required Workflow

1. Inspect the project:
   - Check for `components.json`.
   - Check existing UI aliases and component locations.
   - Check which shadcn components are already installed.
   - Check the package manager before running any CLI command.
2. Search shadcn before creating anything custom:

```bash
pnpm dlx shadcn@latest search -q "<component need>"
```

Use the correct runner for the project: `pnpm dlx`, `npx`, or `bunx`.

3. If a matching or composable shadcn component exists:
   - Read the docs for that component.
   - Install it with the shadcn CLI if it is not already installed.
   - Compose and customize it for the project.
   - Keep the installed source compatible with local aliases, styling, icon library, and component conventions.
4. If no direct component exists, search for composable primitives or nearby patterns:
   - Example: a settings panel can use `Tabs`, `Card`, `Switch`, `Field`, and `Button`.
   - Example: an empty result screen should use `Empty`, not custom markup.
   - Example: a destructive confirmation should use `AlertDialog`, not a hand-rolled modal.
5. Create custom component code only when shadcn has no suitable direct component or composable primitive.
6. Validate the final component with available lint, typecheck, tests, build, or browser verification.

Read `references/shadcn-react-component-pattern.md` for component selection and customization guidance.

## Rules

- Prefer shadcn source components over custom markup.
- Prefer composition of existing shadcn primitives over creating a new primitive.
- Install missing shadcn components through the CLI; do not copy raw registry source manually.
- Customize through project tokens, variants, composition, and local wrapper components.
- Keep accessibility behavior from shadcn components intact.
- Do not overwrite locally modified shadcn files without checking diffs and getting explicit approval when needed.
- Keep component file and folder names aligned with the project's naming convention.
- Add comments in code when the customization has non-obvious intent, constraints, or maintenance tradeoffs.
