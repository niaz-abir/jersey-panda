import { z } from 'zod';

export const updateReviewGallerySchema = z.object({
  firstImage: z.string().optional(),
  secondImage: z.string().optional(),
});

export type UpdateReviewGalleryDto = z.infer<typeof updateReviewGallerySchema>;
