import { Module } from '@nestjs/common';
import { ReviewGalleryService } from './review-gallery.service';
import { ReviewGalleryController } from './review-gallery.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ReviewGalleryController],
  providers: [ReviewGalleryService, PrismaService],
})
export class ReviewGalleryModule {}
