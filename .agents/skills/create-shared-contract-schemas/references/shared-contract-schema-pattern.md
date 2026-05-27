# Shared Contract Schema Pattern

This pattern is for JavaScript/TypeScript monorepos with frontend and backend apps. Adapt package names and schema libraries to the target repo.

## Package Purpose

Create one shared package for cross-app data contracts, commonly:

```text
packages/contracts
```

or:

```text
packages/schemas
```

Use the repository's package naming convention. For scoped monorepos, the package might be `@scope/contracts`.

## When To Use Shared Contracts

Use a shared schema for:

- API response payloads.
- API request bodies.
- Query/filter payloads shared between frontend and backend.
- Form submit payloads sent to a backend.
- Webhook/event/message payloads consumed by more than one app.
- Auth/session/user profile payloads shared across apps.
- Mock data that represents a future or current backend contract.
- Fixtures used by multiple apps/packages.

Do not put purely local UI state in the shared contract package unless it crosses a package/app boundary.

## Recommended Package Shape

```text
packages/contracts/
  package.json
  tsconfig.json
  src/
    index.ts
    <domain>/
      <resource>.schema.ts
      <resource>.mock.ts
```

Examples:

```text
src/user/user-profile.schema.ts
src/user/user-profile.mock.ts
src/media-kit/media-kit.schema.ts
src/contact/contact-request.schema.ts
```

Use kebab-case filenames and folders when the project has no conflicting convention.

## Runtime Schema Library

Prefer the schema library already used by the repo.

If the repo has no schema library yet, `zod` is a pragmatic default because it provides runtime validation and inferred TypeScript types:

```bash
pnpm --filter @scope/contracts add zod
```

Adjust the filter and package name to the repo. If package dependency policy keeps shared runtime dependencies at the root, follow that policy.

## Input and Output Types

Every exported schema must export both:

- An input type with `z.input<typeof schema>`.
- A parsed/output type with `z.infer<typeof schema>`.

This is mandatory because coercion, preprocessing, transforms, defaults, and pipes can make the accepted input type different from the parsed output type.

Use this naming convention:

```ts
export const userProfileSchema = z.object({})

export type UserProfileInput = z.input<typeof userProfileSchema>
export type UserProfile = z.infer<typeof userProfileSchema>
```

For request/response contracts:

```ts
export const updateUserProfileRequestSchema = z.object({})

export type UpdateUserProfileRequestInput = z.input<typeof updateUserProfileRequestSchema>
export type UpdateUserProfileRequest = z.infer<typeof updateUserProfileRequestSchema>
```

Use the output type for parsed, trusted values. Use the input type for raw values before validation.

## Validation Messages

Every field, parameter, and validation rule must define a clear message for a non-technical final user.

For Zod 4, use the unified `error` parameter for new schemas and rules. Do not use `required_error` or `invalid_type_error` in new code; those were dropped in Zod 4. A missing required value is represented as an `invalid_type` issue where the input is `undefined`, so required and wrong-type cases must be handled explicitly.

Schema-level messages have the highest precedence. Use per-parse or global error maps only as a fallback; they must not replace well-written schema-level messages for user-facing contracts.

Do not use generic or technical messages such as:

```text
Invalid input
Required
Expected string
Invalid enum value
```

Use direct, human messages that explain what the user can fix:

```text
Informe seu nome completo.
Use um e-mail válido, como nome@empresa.com.
Escolha uma data válida.
O valor precisa ser maior que zero.
```

Avoid messages that sound generated, robotic, blameful, or implementation-focused. Write them as product copy.

### Multilingual Readiness

Keep validation messages standardized so they can later move to an i18n layer.

Recommended pattern:

- Define a stable message key or code next to each reusable message.
- Keep the current default message in the schema for immediate use.
- Prefer central message maps for common validations.
- Do not hard-code different phrasings for the same validation across many schemas.

Example:

```ts
export const validationMessages = {
  requiredName: {
    key: 'validation.required_name',
    message: 'Informe seu nome completo.'
  },
  requiredEmail: {
    key: 'validation.required_email',
    message: 'Informe seu e-mail.'
  },
  requiredPrice: {
    key: 'validation.required_price',
    message: 'Informe o valor.'
  },
  invalidText: {
    key: 'validation.invalid_text',
    message: 'Revise este campo e tente novamente.'
  },
  invalidNumber: {
    key: 'validation.invalid_number',
    message: 'Informe um número válido.'
  },
  invalidEmail: {
    key: 'validation.invalid_email',
    message: 'Use um e-mail válido, como nome@empresa.com.'
  },
  invalidDate: {
    key: 'validation.invalid_date',
    message: 'Escolha uma data válida.'
  },
  invalidRole: {
    key: 'validation.invalid_role',
    message: 'Escolha um tipo de acesso válido.'
  },
  invalidAvatarUrl: {
    key: 'validation.invalid_avatar_url',
    message: 'Use uma URL válida para a imagem de perfil.'
  },
  positiveNumber: {
    key: 'validation.positive_number',
    message: 'Informe um valor maior que zero.'
  }
} as const
```

Zod rules should use the `message` value through the Zod 4 `error` parameter:

```ts
z.string({
  error: issue =>
    issue.input === undefined
      ? validationMessages.requiredName.message
      : validationMessages.invalidText.message
}).min(1, { error: validationMessages.requiredName.message })
```

If the app needs structured errors, keep the message key in a parallel error map or add a small helper that maps schema paths/rules to keys. Do not expose technical parser errors directly to the user.

Do not enable or surface raw parser input in user-facing errors. Inputs can contain sensitive data and should not appear in validation messages.

### Mandatory Message Coverage

For every shared schema, explicitly cover the Zod issue categories that can happen for that schema:

- **Missing required value / wrong base type**: provide an `error` function at the base schema level. Handle `issue.input === undefined` separately from other invalid types.
- **Invalid literal or enum value**: give enum/literal options a message that explains the available choice in user language.
- **String formats**: add messages for `email`, `url`, `uuid`, `datetime`, `regex`, and any other format checks.
- **Length and size limits**: add messages for `min`, `max`, `length`, `nonempty`, array size, set size, and file size rules.
- **Numeric and date ranges**: add messages for lower/upper bounds, integer checks, finite checks, positive/nonnegative checks, and multiples.
- **Object shape issues**: add messages for unrecognized keys only if the schema is strict and the error can reach a user.
- **Record/map/set key or element issues**: add messages for invalid keys and invalid elements when using keyed collections.
- **Union/discriminated union failures**: prefer a single product-level message that tells the user what valid shape or option is expected.
- **Custom refinements**: every `refine`, `superRefine`, `check`, transform validation, or manual `addIssue` must provide a final-user message.
- **Coercion failures**: when using `z.coerce.*`, provide a message for the post-coercion type or range failure that does not mention coercion.

Examples:

```ts
export const userRoleSchema = z.enum(['admin', 'editor', 'viewer'], {
  error: validationMessages.invalidRole.message
})

export const priceSchema = z.coerce
  .number({
    error: issue =>
      issue.input === undefined
        ? validationMessages.requiredPrice.message
        : validationMessages.invalidNumber.message
  })
  .positive({ error: validationMessages.positiveNumber.message })
```

## Coercion Rules

Use coercion when it matches how values actually enter the system:

- Use `z.coerce.number()` for numeric query params, form values, and env-like inputs that arrive as strings.
- Use `z.coerce.boolean()` only when the accepted string behavior is intentional and tested.
- Use `z.coerce.string()` sparingly because it can hide bad caller behavior.
- For date-like values, do not rely blindly on `z.coerce.date()` in shared contracts. Make the boundary explicit.

For JSON API contracts, prefer ISO strings as the wire format:

```ts
import { z } from 'zod'

import { validationMessages } from './validation-message.schema'

export const isoDateStringSchema = z.string().datetime({
  error: validationMessages.invalidDate.message
})
export type IsoDateStringInput = z.input<typeof isoDateStringSchema>
export type IsoDateString = z.infer<typeof isoDateStringSchema>
```

Then use `createdAt: isoDateStringSchema` in response/request schemas that represent JSON payloads.

When a consumer really needs a `Date` object, create a safe helper that accepts valid `Date` objects and date-like strings/numbers, while rejecting invalid dates:

```ts
import { z } from 'zod'

import { validationMessages } from './validation-message.schema'

export const dateLikeSchema = z.preprocess(value => {
  if (value instanceof Date) {
    return value
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return new Date(value)
  }

  return value
}, z.custom<Date>(value => value instanceof Date && !Number.isNaN(value.getTime()), {
  error: validationMessages.invalidDate.message
}))

export type DateLikeInput = z.input<typeof dateLikeSchema>
export type DateLike = z.infer<typeof dateLikeSchema>
```

This avoids a common ambiguity around date coercion:

- A valid `Date` object should remain a `Date`.
- An invalid `Date` object should fail validation.
- A valid ISO string can become a `Date` only when the schema intentionally models a parsed runtime value.
- A JSON API response schema should usually keep the field as an ISO string unless the parsing layer explicitly transforms it.

If a project wants one shared helper file, place it near the contracts package schema utilities:

```text
src/shared/date.schema.ts
src/shared/validation-message.schema.ts
```

and export it from the package entrypoint.

## Package Manifest Example

```json
{
  "name": "@scope/contracts",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/index.ts"
  },
  "dependencies": {
    "zod": "^3"
  },
  "devDependencies": {
    "@scope/config": "workspace:*",
    "typescript": "^5"
  }
}
```

If the monorepo already has shared TypeScript config, extend it in `tsconfig.json`. Otherwise keep the config minimal and aligned with the repo's TypeScript setup.

## Schema Example

`src/user/user-profile.schema.ts`:

```ts
import { z } from 'zod'

import { isoDateStringSchema } from '../shared/date.schema'
import { validationMessages } from '../shared/validation-message.schema'

export const userProfileSchema = z.object({
  id: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Não foi possível identificar o usuário.'
        : 'O identificador do usuário não está em um formato válido.'
  }).min(1, { error: 'Não foi possível identificar o usuário.' }),
  name: z.string({
    error: issue =>
      issue.input === undefined
        ? validationMessages.requiredName.message
        : validationMessages.invalidText.message
  }).min(1, { error: validationMessages.requiredName.message }),
  email: z.string({
    error: issue =>
      issue.input === undefined
        ? validationMessages.requiredEmail.message
        : validationMessages.invalidText.message
  }).email({ error: validationMessages.invalidEmail.message }),
  avatarUrl: z
    .string({ error: validationMessages.invalidAvatarUrl.message })
    .url({ error: validationMessages.invalidAvatarUrl.message })
    .nullable(),
  createdAt: isoDateStringSchema
})

export type UserProfileInput = z.input<typeof userProfileSchema>
export type UserProfile = z.infer<typeof userProfileSchema>
```

For API responses, name the contract by the payload, not by an implementation detail:

```ts
export const getUserProfileResponseSchema = userProfileSchema
export type GetUserProfileResponseInput = z.input<typeof getUserProfileResponseSchema>
export type GetUserProfileResponse = z.infer<typeof getUserProfileResponseSchema>
```

For request payloads:

```ts
export const updateUserProfileRequestSchema = z.object({
  name: z.string({
    error: issue =>
      issue.input === undefined
        ? validationMessages.requiredName.message
        : validationMessages.invalidText.message
  }).min(1, { error: validationMessages.requiredName.message }),
  avatarUrl: z
    .string({ error: validationMessages.invalidAvatarUrl.message })
    .url({ error: validationMessages.invalidAvatarUrl.message })
    .nullable()
})

export type UpdateUserProfileRequestInput = z.input<typeof updateUserProfileRequestSchema>
export type UpdateUserProfileRequest = z.infer<typeof updateUserProfileRequestSchema>
```

## Mock Example

`src/user/user-profile.mock.ts`:

```ts
import { userProfileSchema, type UserProfile } from './user-profile.schema'

export const userProfileMock: UserProfile = userProfileSchema.parse({
  id: 'user_001',
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  avatarUrl: null,
  createdAt: '2026-01-01T00:00:00.000Z'
})
```

Use shared mocks only when multiple apps/packages need the same mock or fixture. For app-local mocks, import `type UserProfile` or `userProfileSchema` from the shared package and validate locally.

## Entry Point

`src/index.ts`:

```ts
export * from './user/user-profile.schema'
export * from './user/user-profile.mock'
```

Export mocks only when they are intentionally shared. If mocks are local development fixtures, keep them out of the public package entrypoint or use a separate subpath export if the package supports it.

## Consumer Example

Frontend:

```ts
import { getUserProfileResponseSchema, type GetUserProfileResponse } from '@scope/contracts'

export async function getUserProfile(): Promise<GetUserProfileResponse> {
  const response = await fetch('/api/user')
  const data = await response.json()

  return getUserProfileResponseSchema.parse(data)
}
```

Backend:

```ts
import { updateUserProfileRequestSchema } from '@scope/contracts'

export async function updateUserProfile(input: unknown) {
  const payload = updateUserProfileRequestSchema.parse(input)

  return payload
}
```

## Checklist

- Does this payload cross backend/frontend or app/package boundaries?
- Is the schema in a shared package?
- Does every exported schema export both `z.input<typeof schema>` and `z.infer<typeof schema>` types?
- Are TypeScript types inferred from the schema instead of duplicated manually?
- Do all consumers import from the shared package?
- Do mocks either live in the shared package or conform to the shared schema?
- Are breaking contract changes reflected in all consumers?
- Are package exports and workspace dependencies updated?
