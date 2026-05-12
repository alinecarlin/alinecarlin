import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginImportHelpers from 'eslint-plugin-import-helpers'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const eslintConfig = [
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    plugins: {
      import: eslintPluginImport,
      'import-helpers': eslintPluginImportHelpers
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          arrowParens: 'avoid',
          trailingComma: 'none',
          endOfLine: 'auto',
          printWidth: 120,
          tabWidth: 2
        }
      ],

      'import/no-duplicates': ['error', { 'prefer-inline': true }],

      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['module', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ]
    }
  },
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
  }
]

export default eslintConfig
