import { z } from 'zod';

export const updateFootballItemSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  price: z.number().optional(),
});

export type UpdateFootballItemDto = z.infer<typeof updateFootballItemSchema>;
