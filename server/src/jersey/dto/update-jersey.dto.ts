import { z } from 'zod';

export const updateJerseySchema = z.object({
  category: z.enum(['CLUB', 'NATIONAL']).optional(),
  name: z.string().optional(),
  image: z.string().optional(),
  size: z.array(z.string()).optional(),
  price: z.number().optional(),
  discountPrice: z.number().optional(),
});

export type UpdateJerseyDto = z.infer<typeof updateJerseySchema>;
