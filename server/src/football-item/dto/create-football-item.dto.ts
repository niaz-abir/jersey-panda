import { z } from 'zod';

export const createFootballItemSchema = z.object({
  name: z.string(),
  image: z.string(),
  price: z.number(),
});

export type CreateFootballItemDto = z.infer<typeof createFootballItemSchema>;
