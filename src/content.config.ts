import { defineCollection, z } from "astro:content";

// Define a shared schema for all three collections
const baseSchema = z.object({
  title: z.string(),
  code: z.string(),
  description: z.string(),
});

export const collections = {
  types: defineCollection({ schema: baseSchema }),
  functions: defineCollection({ schema: baseSchema }),
  dichotomies: defineCollection({ schema: baseSchema }),
};
