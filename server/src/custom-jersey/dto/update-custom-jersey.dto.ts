import { z } from 'zod';

export const updateCustomJerseySchema = z.object({
  picture: z.string().optional(),
  title: z.string().optional(),
  color: z.string().optional(),
});

export type UpdateCustomJerseyDto = z.infer<typeof updateCustomJerseySchema>;
