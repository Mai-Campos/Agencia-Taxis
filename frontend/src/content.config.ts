import { defineCollection, z } from 'astro:content'

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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
})

export const collections = {
  'route-cards': routeCardsCollection,
  'routes-info': routesInfoCollection,
  'service-card': serviceCardCollection,
}
