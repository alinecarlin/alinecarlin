---
name: create-shared-contract-schemas
description: Create shared schemas and inferred types for data contracts exchanged between backend and frontend applications in a JavaScript/TypeScript monorepo. Use when defining API request bodies, API responses, DTOs, form payloads sent to backend services, backend payloads consumed by frontend apps, shared mock payloads, fixtures, or any data shape that crosses app/package boundaries. Always place these contracts in a shared package so every app in the monorepo imports the same schema and type instead of duplicating local types.
---

# Create Shared Contract Schemas

## Core Rule

If a data shape crosses a boundary between backend, frontend, or another app/package, define the schema in a shared package.

Do this even when the backend does not exist yet, the API is mocked, or the frontend is using static mock data. The implementation can be temporary; the contract must be shared.

## Workflow

1. Identify the boundary:
   - Backend response consumed by frontend.
   - Frontend request sent to backend.
   - Form payload submitted to an API.
   - Webhook/event payload shared by apps.
   - Mock data representing future API data.
   - Fixture used by more than one app/package.
2. Inspect existing workspace packages. Reuse an existing contracts/schemas package if present.
3. If none exists, create a shared package under `packages/`, usually named `contracts` or `schemas` according to the repo's naming convention.
4. Define runtime schemas plus both input and output TypeScript types in that package.
5. Add explicit, user-friendly validation messages to every field and rule.
6. Export schemas and types from the package entrypoint.
7. Add the package as a workspace dependency wherever the contract is used.
8. Replace duplicated local DTO/types with imports from the shared package.
9. If mock data exists, make it conform to the shared schema:
   - Shared mock fixtures can live in the contracts package.
   - App-local mocks may stay local, but must use the shared type/schema.
10. Validate with available typecheck/test commands.

Read `references/shared-contract-schema-pattern.md` for package shape, naming, and examples.

## Principles

- Treat API payloads as contracts, not app-local implementation details.
- Prefer runtime schemas plus `z.input` and `z.infer` types over hand-maintained parallel interfaces.
- Every exported schema must also export its input type with `z.input<typeof schema>` and its parsed/output type with `z.infer<typeof schema>`.
- Use coercion intentionally when inputs commonly arrive as strings or loose values.
- For date values, avoid blind date coercion in shared contracts; use a safe date helper or keep ISO strings at the wire boundary.
- Every field, parameter, and validation rule must have a clear final-user message written in natural language.
- Cover type errors, missing required values, invalid literal/enum values, format errors, size/length limits, range limits, union failures, object key errors, collection element errors, and custom refinements with explicit messages.
- Standardize validation message keys/codes so the app can later support multiple languages without rewriting schemas.
- Keep domain schemas close together in the shared package.
- Keep app-specific view models outside the shared contract package unless they cross app boundaries.
- Version or evolve schemas intentionally when a change breaks consumers.
- Do not create backend/frontend duplicate types for the same payload.
