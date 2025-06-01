import { defineCollection, z } from "astro:content";
import { glob } from "astro:loaders";

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
    loader: glob({ base: "./src/content/types", pattern: "/*.md" }),
    schema: baseSchema,
  }),
  functions: defineCollection({
    loader: glob({ base: "./src/content/functions", pattern: "/*.md" }),
    schema: baseSchema,
  }),
  dichotomies: defineCollection({
    loader: glob({ base: "./src/content/dichotomies", pattern: "/*.md" }),
    schema: baseSchema,
  }),
  database: defineCollection({
    loader: glob({ base: "./src/content/database", pattern: "/*.md" }),
    schema: databaseSchema,
  }),
  neurosocionics: defineCollection({
    loader: glob({ base: "./src/content/neurosocionics", pattern: "/*.md" }),
    schema: baseSchema,
  }),
};
