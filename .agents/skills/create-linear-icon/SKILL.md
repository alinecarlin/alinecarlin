---
name: create-linear-icon
description: Create or edit React TypeScript SVG icon components in a linear, minimal, technical style with thin uniform strokes, lightly rounded corners, no fill by default, native SVG props, forwardRef, children support, and overridable props for each meaningful visual part. Use when Codex is asked to design, implement, convert, refactor, or add a code-based icon component, independent of the destination folder or project-specific file naming conventions.
---

# Create Linear Icon

## Workflow

1. Read any local icon guidance or nearby icon examples if the target project provides them. Use local component/export conventions when present, but do not invent a destination folder or file naming rule.
2. Read `references/linear-icon-component.md` for the required visual style, component contract, and checklist.
3. Create the icon as a code-based SVG component, not as a raster asset.
4. Keep the icon visually linear, minimal, technical, and scalable:
   - Thin uniform strokes.
   - Slightly rounded corners and joins.
   - No fill by default.
   - Clean geometry on a simple grid.
   - Fast recognition at small UI sizes.
5. Expose native SVG props and per-part props so callers can override dimensions, paths, stroke, fill, transforms, and other attributes without editing the component internals.
6. Validate syntax and types with the target project's available checks when possible.

## Output Rules

- Use the requested component name or the project's existing component naming convention.
- Keep placement and export changes aligned with the user's request or local project context.
- Do not add dependencies.
- Do not use `React.FC`, `any`, or props that block normal SVG behavior.
- Render `children` at the end of the SVG.
- Prefer semantic part prop names such as `frameProps`, `markProps`, `lineProps`, `nodeProps`, `arrowProps`, `badgeProps`, `lensProps`, or `dotProps`.
- Use numbered part names only for abstract shapes with no clear visual role.
