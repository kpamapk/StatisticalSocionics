import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string().optional(),
});

const databaseSchema = baseSchema.extend({
  image: z.string().refine((path) => path.startsWith("/reddit-images/"), {
    message: "Image path must start with /reddit-images/",
  }),
});

export const collections = {
  types: defineCollection({ schema: baseSchema }),
  functions: defineCollection({ schema: baseSchema }),
  dichotomies: defineCollection({ schema: baseSchema }),
  database: defineCollection({ schema: databaseSchema }),
  neurosocionics: defineCollection({ schema: baseSchema }),
};

