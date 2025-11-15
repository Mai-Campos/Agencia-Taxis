import { defineCollection, z } from 'astro:content'

const tripCardCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    packageName: z.string(),
    img: z.string(),
    placesToVisit: z.array(z.string()),
    price: z.string(),
    path: z.string(),
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
  'trip-card': tripCardCollection,
  'service-card': serviceCardCollection,
}
