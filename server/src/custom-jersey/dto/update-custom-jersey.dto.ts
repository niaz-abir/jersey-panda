import { z } from 'zod';

export const updateCustomJerseySchema = z.object({
  image: z.string().optional(),
});

export type UpdateCustomJerseyDto = z.infer<typeof updateCustomJerseySchema>;
