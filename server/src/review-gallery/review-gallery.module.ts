import { Module } from '@nestjs/common';
import { ReviewGalleryService } from './review-gallery.service';
import { ReviewGalleryController } from './review-gallery.controller';

@Module({
  controllers: [ReviewGalleryController],
  providers: [ReviewGalleryService],
})
export class ReviewGalleryModule {}
