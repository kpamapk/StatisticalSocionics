import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string().optional(),
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
  neurosocionics: defineCollection({
    loader: glob({ base: "./src/content/neurosocionics", pattern: "/*.md" }),
    schema: baseSchema,
  }),
  database: defineCollection({
    loader: glob({ base: "./src/content/database", pattern: "**/*.md" }),
    schema: baseSchema.extend({
      image: z.string().optional(),
      url: z.string().url().optional(),
    }),
  }),
};
