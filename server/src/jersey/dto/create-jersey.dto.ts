import { z } from 'zod';

export const createJerseySchema = z
  .object({
    title: z.string(),
    picture: z.string(),
    size: z.array(z.string()),
    color: z.string(),
    category: z.enum(['CLUB', 'NATIONAL']),
    orginalPrice: z.number(),
    discountPrice: z.number(),
  })
  .strict();

export type CreateJerseyDto = z.infer<typeof createJerseySchema>;
