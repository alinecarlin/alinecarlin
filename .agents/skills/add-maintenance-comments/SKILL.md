---
name: add-maintenance-comments
description: Add clear English comments to new or modified code so future maintainers understand what each meaningful part does and why it was implemented that way. Use when creating, editing, refactoring, reviewing, or documenting source code in JavaScript/TypeScript or related projects. Comments should explain intent, decisions, constraints, data flow, edge cases, and maintenance risks without adding noisy line-by-line paraphrases of obvious syntax.
---

# Add Maintenance Comments

## Core Rule

When writing or changing code, add English comments that help a future maintainer understand:

- What each meaningful block, function, module, schema, component, hook, handler, or configuration section does.
- Why the implementation uses that approach instead of a simpler or more obvious alternative.
- Which constraints, assumptions, edge cases, or integration requirements matter.
- What must stay true for the code to remain correct.

Comments are part of the implementation quality. Do not leave complex code uncommented.

## Comment Style

Write comments in clear, natural English.

Good comments:

- Explain intent and reasoning.
- Capture domain rules and non-obvious constraints.
- Point out boundaries between layers or systems.
- Explain validation, parsing, transformation, caching, synchronization, error handling, and fallback decisions.
- Help someone safely change the code later.

Avoid comments that only repeat the syntax:

```ts
// Bad: Set count to count plus one.
count += 1
```

Prefer comments that explain meaning:

```ts
// Keep this increment inside the same tick so the optimistic count matches the queued mutation.
count += 1
```

## Where To Comment

Add comments for:

- Module purpose when the file coordinates multiple responsibilities.
- Public functions, exported helpers, components, hooks, schemas, classes, and config objects.
- Complex branches, loops, transforms, reducers, memoization, caching, debounce/throttle logic, retries, fallbacks, and error boundaries.
- Cross-boundary contracts between frontend, backend, packages, external APIs, storage, routing, or build tools.
- Validation rules and user-facing error message choices.
- Workarounds, compatibility constraints, performance tradeoffs, and intentionally duplicated logic.
- Future-work notes only when they are actionable and tied to a concrete condition.

For simple, obvious local code, prefer a short block-level comment over many trivial inline comments.

## How Much Detail

Use enough detail that a maintainer can answer:

- What is this part responsible for?
- Why is it shaped this way?
- What can break if it changes?
- Where should someone look next if they need to extend it?

Do not write long essays inside code. If a comment grows too large, extract the idea into a shorter summary and keep deeper rationale in project documentation only if the repo already has that pattern.

## Examples

Useful:

```ts
// The API returns dates as ISO strings, so the shared contract keeps the wire format stable.
// Consumers that need Date objects should parse after validation to avoid timezone surprises.
export const createdAtSchema = isoDateStringSchema
```

Useful:

```ts
// The provider owns a single QueryClient instance for the lifetime of the browser session.
// Creating it inside useState prevents cache resets on every React render.
const [queryClient] = useState(() => new QueryClient())
```

Useful:

```ts
// Keep framework-specific options out of the base preset so libraries and apps can share
// strictness without inheriting runtime assumptions from one framework.
export default baseConfig
```

Not useful:

```ts
// Import React.
import React from 'react'
```

## Review Checklist

- Does every meaningful new or changed block explain both what it does and why it exists?
- Are non-obvious tradeoffs, constraints, and edge cases documented?
- Are comments written in English and useful to a maintainer?
- Are there any comments that merely restate syntax and should be removed or rewritten?
- Did the comments stay accurate after final edits?
