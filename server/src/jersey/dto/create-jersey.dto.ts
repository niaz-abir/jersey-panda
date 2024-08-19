import { z } from 'zod';

export const createJerseySchema = z
  .object({
    category: z.enum(['CLUB', 'NATIONAL']),
    name: z.string(),
    image: z.string(),
    size: z.array(z.string()),
    price: z.number(),
    discountPrice: z.number(),
  })
  .strict();

export type CreateJerseyDto = z.infer<typeof createJerseySchema>;
