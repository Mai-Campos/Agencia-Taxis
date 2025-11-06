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

// layout collections
const footerCollection = defineCollection({
  loader: file([
    'src/content/es/layout/footer.md',
    'src/content/en/layout/footer.md',
    'src/content/ru/layout/footer.md',
  ]),
})
const navBarCollection = defineCollection({})

// sections collections
const airportTravelsCollection = defineCollection({
  /* ... */
})
const callToActionCollection = defineCollection({
  /* ... */
})
const heroCollection = defineCollection({
  /* ... */
})
const routesContainerCollection = defineCollection({
  /* ... */
})
const servicesInfoCollection = defineCollection({
  /* ... */
})
const testimonialsCollection = defineCollection({
  /* ... */
})

// ui collections
const buttonCollection = defineCollection({
  /* ... */
})
const footerCardCollection = defineCollection({
  /* ... */
})
const seeAllRoutesLinkCollection = defineCollection({
  /* ... */
})
const serviceCardCollection = defineCollection({
  /* ... */
})
const testimonialCardCollection = defineCollection({
  /* ... */
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  routeCardsCollection,
  routesInfoCollection,
  footerCollection,
  navBarCollection,
  airportTravelsCollection,
  callToActionCollection,
  heroCollection,
  routesContainerCollection,
  servicesInfoCollection,
  testimonialsCollection,
  buttonCollection,
  footerCardCollection,
  seeAllRoutesLinkCollection,
  serviceCardCollection,
  testimonialCardCollection,
}
