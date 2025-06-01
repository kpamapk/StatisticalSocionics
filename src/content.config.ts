import { defineCollection, z } from "astro:content";

const typeSchema = z.object({
  title: z.string(),
  code: z.string(),
  description: z.string(),
});

export const collections = {
  types: defineCollection({
    schema: typeSchema,
    loader: async () => import.meta.glob('./types/**/*.md'),
  }),
  functions: defineCollection({
    schema: typeSchema,
    loader: async () => import.meta.glob('./functions/**/*.md'),
  }),
  dichotomies: defineCollection({
    schema: typeSchema,
    loader: async () => import.meta.glob('./dichotomies/**/*.md'),
  }),
};
