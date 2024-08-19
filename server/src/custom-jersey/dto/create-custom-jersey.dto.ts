import { z } from 'zod';

export const createCustomJerseySchema = z.object({
  image: z.string(),
});

export type CreateCustomJerseyDto = z.infer<typeof createCustomJerseySchema>;
