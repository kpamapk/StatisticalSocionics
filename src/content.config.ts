import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string().optional(),
});

export const collections = {
  types: defineCollection({ schema }),
  functions: defineCollection({ schema }),
  dichotomies: defineCollection({ schema }),
  database: defineCollection({ schema }),
  neurosocionics: defineCollection({ schema }), // 👈 ADD THIS
};
