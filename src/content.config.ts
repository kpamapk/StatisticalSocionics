import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string().optional(),
});

const databaseSchema = baseSchema.extend({
  image: z.string().optional(), // ✅ Path to /public image
  url: z.string().url().optional(), // ✅ External Reddit URL
});

export const collections = {
  types: defineCollection({ schema: baseSchema }),
  functions: defineCollection({ schema: baseSchema }),
  dichotomies: defineCollection({ schema: baseSchema }),
  neurosocionics: defineCollection({ schema: baseSchema }),
  database: defineCollection({ schema: databaseSchema }),
};
