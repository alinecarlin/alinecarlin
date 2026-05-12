import tseslint from 'typescript-eslint'

import baseConfig from './base.mjs'

const eslintConfig = [
  ...tseslint.configs.recommended,
  ...baseConfig,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
]

export default eslintConfig
