import { defineCollection, z } from 'astro:content'

const tripsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    packageName: z.string(),
    path: z.string(),
    img: z.string(),
    placesToVisit: z.array(z.string()),
    price: z.string(),
  }),
})

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
})

export const collections = {
  trips: tripsCollection,
  'our-services': servicesCollection,
}
