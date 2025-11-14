import { defineCollection, z } from 'astro:content'

const tripCardCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    packageName: z.string(),
    img: z.string(),
  }),
})

const recommendedTripCardCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    packageName: z.string(),
    img: z.string(),
  }),
})

const tripInfoCollection = defineCollection({
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
  'trip-card': tripCardCollection,
  'trip-info': tripInfoCollection,
  'service-card': serviceCardCollection,
  'recommended-trip-card': recommendedTripCardCollection,
}
