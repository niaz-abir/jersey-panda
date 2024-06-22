import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ReviewGallery } from '@prisma/client';

@Injectable()
export class ReviewGalleryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReviewGalleryData: ReviewGallery) {
    const review = await this.prisma.reviewGallery.create({
      data: createReviewGalleryData,
    });

    return review;
  }

  async findAll() {
    const reviews = await this.prisma.reviewGallery.findMany();
    return reviews;
  }

  async findOne(id: string) {
    const review = await this.prisma.reviewGallery.findUnique({
      where: {
        id,
      },
    });

    return review;
  }

  async update(id: string, updateReviewGalleryData: Partial<ReviewGallery>) {
    const result = await this.prisma.reviewGallery.update({
      where: { id },
      data: updateReviewGalleryData,
    });

    return result;
  }

  async remove(id: string) {
    const deletedReview = await this.prisma.reviewGallery.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    return deletedReview;
  }
}
