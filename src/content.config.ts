import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const typeSchema = z.object({
  title: z.string(),
  code: z.string(),
  description: z.string(),
});

export const collections = {
  types: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/types" }),
    schema: typeSchema,
  }),
  functions: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/functions" }),
    schema: typeSchema,
  }),
  dichotomies: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/dichotomies" }),
    schema: typeSchema,
  }),
};
