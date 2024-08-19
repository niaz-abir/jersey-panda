import { z } from 'zod';

export const updateFootballItemSchema = z.object({
  name: z.string(),
  image: z.string(),
  price: z.number(),
});

export type UpdateFootballItemDto = z.infer<typeof updateFootballItemSchema>;
