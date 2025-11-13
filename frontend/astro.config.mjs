// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
})
