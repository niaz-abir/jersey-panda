import { Module } from '@nestjs/common';
import { ReviewGalleryService } from './review-gallery.service';
import { ReviewGalleryController } from './review-gallery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReviewGallery,
  ReviewGallerySchema,
} from 'src/schemas/review-gallery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ReviewGallery.name,
        schema: ReviewGallerySchema,
      },
    ]),
  ],
  controllers: [ReviewGalleryController],
  providers: [ReviewGalleryService],
})
export class ReviewGalleryModule {}
