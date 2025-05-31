import { defineCollection, z } from "astro:content";

const functions = defineCollection({
  schema: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
  }),
});

const types = defineCollection({
  schema: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
  }),
});

const dichotomies = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  functions,
  types,
  dichotomies,
};
