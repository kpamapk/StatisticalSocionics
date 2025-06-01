import { defineCollection, z, glob } from "astro:content";

export const collections = {
  types: defineCollection({
    loader: async () => glob("./src/content/types/**/*.md"),
    schema: z.object({
      title: z.string(),
      code: z.string(),
      description: z.string(),
    }),
  }),
  functions: defineCollection({
    loader: async () => glob("./src/content/functions/**/*.md"),
    schema: z.object({
      title: z.string(),
      code: z.string(),
      description: z.string(),
    }),
  }),
  dichotomies: defineCollection({
    loader: async () => glob("./src/content/dichotomies/**/*.md"),
    schema: z.object({
      title: z.string(),
      code: z.string(),
      description: z.string(),
    }),
  }),
};
