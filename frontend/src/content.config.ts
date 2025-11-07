import { defineCollection, z } from 'astro:content'

import { glob, file } from 'astro/loaders'

// route-cards and routes-info collections
const routeCardsCollection = defineCollection({
  loader: glob({ pattern: '**/route-cards/*.md', base: './src/content' }),
  schema: z.object({}),
})
const routesInfoCollection = defineCollection({
  loader: glob({ pattern: '**/routes-info/*.md', base: './src/content' }),
  schema: z.object({}),
})

const serviceCardCollection = defineCollection({
  /* ... */
})

export const collections = {
  routeCardsCollection,
  routesInfoCollection,
  serviceCardCollection,
}
