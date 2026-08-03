import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    devto: z.string().url().optional()
  })
});

export const collections = { notes };
