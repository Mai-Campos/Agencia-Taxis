// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import alpinejs from '@astrojs/alpinejs'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), alpinejs(), react()],
})
