import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Base schema
const baseSchema = z.object({
  title: z.string(),
  code: z.string().optional(),
  description: z.string(),
});

// Extended for database (image + url)
const databaseSchema = baseSchema.extend({
  image: z.string().optional(), // public image path
  url: z.string().url().optional(), // external link
});

export const collections = {
  types: defineCollection({
    loader: glob("src/content/types/**/*.md"),
    schema: baseSchema,
  }),
  functions: defineCollection({
    loader: glob("src/content/functions/**/*.md"),
    schema: baseSchema,
  }),
  dichotomies: defineCollection({
    loader: glob("src/content/dichotomies/**/*.md"),
    schema: baseSchema,
  }),
  database: defineCollection({
    loader: glob("src/content/database/**/*.md"),
    schema: databaseSchema,
  }),
  neurosocionics: defineCollection({
    loader: glob("src/content/neurosocionics/**/*.md"),
    schema: baseSchema,
  }),
};
