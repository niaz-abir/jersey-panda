import { z } from 'zod';

export const createCustomJerseySchema = z.object({
  picture: z.string(),
  title: z.string(),
  color: z.string(),
});

export type CreateCustomJerseyDto = z.infer<typeof createCustomJerseySchema>;
