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
