import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const types = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/types" }),
  schema: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
  }),
});

const functions = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/functions" }),
  schema: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
  }),
});

const dichotomies = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/dichotomies" }),
  schema: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
  }),
});

export const collections = { types, functions, dichotomies };
