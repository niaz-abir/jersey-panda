import { z } from 'zod';

export const updateReviewGallerySchema = z.object({
  firstImage: z.string().optional(),
  secondImage: z.string().optional(),
});

export type CreateReviewGalleryDto = z.infer<typeof updateReviewGallerySchema>;
