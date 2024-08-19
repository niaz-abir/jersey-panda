import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  HttpStatus,
} from '@nestjs/common';
import { ReviewGalleryService } from './review-gallery.service';
import {
  CreateReviewGalleryDto,
  createReviewGallerySchema,
} from './dto/create-review-gallery.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import GenerateResponse from 'src/utils/GenerateResponse';
import { UpdateReviewGalleryDto } from './dto/update-review-gallery.dto';

@Controller('reviews-gallery')
export class ReviewGalleryController {
  constructor(private readonly reviewGalleryService: ReviewGalleryService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createReviewGallerySchema))
  async create(@Body() createReviewGalleryDto: CreateReviewGalleryDto) {
    const result = await this.reviewGalleryService.create(
      createReviewGalleryDto,
    );

    return new GenerateResponse(
      true,
      HttpStatus.CREATED,
      'Review Gallery is created successfully.',
      result,
    );
  }

  @Get()
  async findAll() {
    const result = await this.reviewGalleryService.findAll();

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Review Gallery are retrieved successfully.',
      result,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.reviewGalleryService.findOne(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Review Gallery is retrieved successfully.',
      result,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReviewGalleryDto: UpdateReviewGalleryDto,
  ) {
    const result = await this.reviewGalleryService.update(
      id,
      updateReviewGalleryDto,
    );

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Review Gallery is updated successfully.',
      result,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.reviewGalleryService.remove(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Review Gallery is deleted successfully.',
      result,
    );
  }
}
