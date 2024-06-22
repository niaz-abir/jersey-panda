import { z } from 'zod';

export const createReviewGallerySchema = z.object({
  firstImage: z.string(),
  secondImage: z.string(),
});

export type CreateReviewGalleryDto = z.infer<typeof createReviewGallerySchema>;
