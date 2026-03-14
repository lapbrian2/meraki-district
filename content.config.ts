import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    theRoad: defineCollection({
      type: 'page',
      source: 'the-road/*.md',
      schema: z.object({
        tag: z.string(),
        excerpt: z.string(),
        author: z.string(),
        date: z.string(),
        image: z.string(),
        featured: z.boolean().default(false),
        published: z.boolean().default(true),
      }),
    }),
  },
})
