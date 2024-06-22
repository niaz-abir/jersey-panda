import { z } from 'zod';

export const createJerseySchema = z.object({
  title: z.string(),
  picture: z.string(),
  size: z.any(),
  color: z.string(),
  category: z.enum(['CLUB', 'NATIONAL']),
  orginalPrice: z.number(),
  discountPrice: z.number(),
});

export type CreateJerseyDto = z.infer<typeof createJerseySchema>;
