import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ReviewGalleryService } from './review-gallery.service';
import { createReviewGallerySchema } from './dto/create-review-gallery.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import { ReviewGallery } from '@prisma/client';

@Controller('reviews-gallery')
export class ReviewGalleryController {
  constructor(private readonly reviewGalleryService: ReviewGalleryService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createReviewGallerySchema))
  create(@Body() createReviewGalleryData: ReviewGallery) {
    return this.reviewGalleryService.create(createReviewGalleryData);
  }

  @Get()
  findAll() {
    return this.reviewGalleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewGalleryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReviewGalleryData: Partial<ReviewGallery>,
  ) {
    return this.reviewGalleryService.update(id, updateReviewGalleryData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewGalleryService.remove(id);
  }
}
