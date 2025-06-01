import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  code: z.string(),
  description: z.string(),
});

export const collections = {
  types: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/types" }),
    schema: baseSchema,
  }),
  functions: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/functions" }),
    schema: baseSchema,
  }),
  dichotomies: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/dichotomies" }),
    schema: baseSchema,
  }),
};
