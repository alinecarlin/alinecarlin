import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

import baseConfig from './base.mjs'

const baseConfigWithoutImportPlugin = baseConfig.map(config => {
  if (!config.plugins?.import) {
    return config
  }

  return {
    ...config,
    plugins: Object.fromEntries(Object.entries(config.plugins).filter(([name]) => name !== 'import'))
  }
})

const eslintConfig = [...nextVitals, ...nextTs, ...baseConfigWithoutImportPlugin]

export default eslintConfig
