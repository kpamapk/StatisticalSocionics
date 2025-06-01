import { defineCollection, z } from "astro:content";

export const collections = {
  types: defineCollection({
    loader: async () => import.meta.glob('./types/**/*.md'),
    schema: z.object({
      title: z.string(),
      code: z.string(),
      description: z.string(),
    }),
  }),
  functions: defineCollection({
    loader: async () => import.meta.glob('./functions/**/*.md'),
    schema: z.object({
      title: z.string(),
      code: z.string(),
      description: z.string(),
    }),
  }),
  dichotomies: defineCollection({
    loader: async () => import.meta.glob('./dichotomies/**/*.md'),
    schema: z.object({
      title: z.string(),
      code: z.string(),
      description: z.string(),
    }),
  }),
};
