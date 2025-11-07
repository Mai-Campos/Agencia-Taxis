import { defineCollection, z } from 'astro:content'

import { glob, file } from 'astro/loaders'

// route-cards and routes-info collections
const routeCardsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    packageName: z.string(),
    img: z.string(),
  }),
})
const routesInfoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    packageName: z.string(),
    packageDescription: z.string(),
    placesToVisit: z.array(z.string()),
    price: z.string(),
  }),
})

const serviceCardCollection = defineCollection({
  /* ... */
})

export const collections = {
  'route-cards': routeCardsCollection,
  'routes-info': routesInfoCollection,
  serviceCardCollection,
}
