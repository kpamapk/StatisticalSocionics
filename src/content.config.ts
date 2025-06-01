import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  code: z.string().optional(),
  description: z.string(),
});

const databaseSchema = baseSchema.extend({
  image: z.string().optional(),
  url: z.string().url().optional(),
});

export const collections = {
  types: defineCollection({
    loader: glob("./content/types/**/*.md"),
    schema: baseSchema,
  }),
  functions: defineCollection({
    loader: glob("./content/functions/**/*.md"),
    schema: baseSchema,
  }),
  dichotomies: defineCollection({
    loader: glob("./content/dichotomies/**/*.md"),
    schema: baseSchema,
  }),
  database: defineCollection({
    loader: glob("./content/database/**/*.md"),
    schema: databaseSchema,
  }),
  neurosocionics: defineCollection({
    loader: glob("./content/neurosocionics/**/*.md"),
    schema: baseSchema,
  }),
};
