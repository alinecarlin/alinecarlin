# Shadcn React Component Pattern

Use this reference after loading the local `shadcn` skill when it is available.

## Component Decision Flow

1. Define the actual UI need:
   - Is it an action, form control, dialog, navigation item, data display, feedback state, layout, or composite feature?
2. Search shadcn registry and local installed components.
3. Prefer an existing component if it satisfies at least one of these:
   - It directly represents the UI need.
   - It provides accessible behavior that would be risky to rebuild.
   - It is a primitive that can be composed into the requested component.
4. Install the component when missing.
5. Build the requested component as a wrapper/composition around installed shadcn pieces.
6. Only create from scratch after confirming no shadcn direct component or useful primitive exists.

## Common Mapping

```text
action button                 -> Button
confirmation modal            -> AlertDialog
modal form                    -> Dialog + Field components
side panel                    -> Sheet
bottom mobile panel           -> Drawer
loading placeholder           -> Skeleton or Spinner
empty state                   -> Empty
status label                  -> Badge
separated content             -> Separator
menu                          -> DropdownMenu
tabs                          -> Tabs
table                         -> Table
settings form                 -> FieldGroup + Field + Input/Switch/Select
command palette               -> Command inside Dialog
toast feedback                -> sonner
```

## Search Before Custom Code

Use the package runner that matches the project:

```bash
pnpm dlx shadcn@latest search -q "data table"
pnpm dlx shadcn@latest docs table
pnpm dlx shadcn@latest add table
```

If using `npx` or `bunx` is correct for the project, use that instead.

Always check existing installed files before installing. Avoid importing a component that is not installed.

## Customization Pattern

When shadcn has a component:

1. Install the shadcn component.
2. Read the installed source.
3. Build a project-specific wrapper if the project needs reusable behavior.
4. Keep shadcn primitives accessible and semantically correct.
5. Customize with:
   - design tokens;
   - component variants;
   - `className` for layout and supported extension points;
   - composition;
   - local wrapper props.

Do not fork shadcn source unnecessarily. Prefer wrappers when project-specific behavior can live outside the primitive.

## From-Scratch Component Criteria

Create a component from scratch only when:

- shadcn has no direct match;
- shadcn primitives do not provide useful behavior;
- the component is domain-specific rather than a UI primitive;
- the behavior is simple enough to maintain locally;
- accessibility can be handled correctly.

Even then, use shadcn primitives inside the custom component whenever possible.

## Review Checklist

- Was the local `shadcn` skill used when available?
- Was shadcn searched before custom code was written?
- Were docs checked for any shadcn component used?
- Was an existing installed component reused when possible?
- Was the component installed through the CLI when needed?
- Does the result preserve accessibility behavior?
- Does styling use project tokens and conventions?
- Were local modifications protected from accidental overwrite?
