import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const updateJerseySchema = z.object({
  title: z.string().optional(),
  picture: z.string().optional(),
  size: z.any().optional(),
  color: z.string().optional(),
  orginalPrice: z.number().optional(),
  discountPrice: z.number().optional(),
});

export type UpdateJerseyDto = Prisma.JerseyUpdateInput;
