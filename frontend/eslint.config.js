// eslint.config.js
import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'

export default [
  // Reglas base JS
  js.configs.recommended,

  // Reglas para TypeScript
  ...tseslint.configs.recommended,

  // Reglas para Astro
  ...astro.configs['recommended'],
  ...astro.configs['jsx-a11y'],

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parser,
    },
  },

  // Configuración global
  {
    rules: {
      'prettier/prettier': 'error',
    },
    plugins: {
      prettier,
    },
  },
]
