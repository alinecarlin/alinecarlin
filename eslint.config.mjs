import baseConfig from './packages/config/eslint/base.mjs'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/.turbo/**',
      '**/next-env.d.ts'
    ]
  },
  ...baseConfig
]
