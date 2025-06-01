import { defineCollection, z, reference, image } from "astro:content";

// Base schema
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string().optional(),
});

// Database schema with local image + optional URL
const databaseSchema = baseSchema.extend({
  image: image().optional(), // ✅ Local image import (from `/public`)
  url: z.string().url().optional(), // ✅ External link (optional)
});

export const collections = {
  types: defineCollection({ schema: baseSchema }),
  functions: defineCollection({ schema: baseSchema }),
  dichotomies: defineCollection({ schema: baseSchema }),
  neurosocionics: defineCollection({ schema: baseSchema }),
  database: defineCollection({ schema: databaseSchema }), // ✅ Enhanced schema
};
