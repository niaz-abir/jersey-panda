import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewGallery } from 'src/schemas/review-gallery.schema';
import { Model } from 'mongoose';
import { CreateReviewGalleryDto } from './dto/create-review-gallery.dto';
import { UpdateReviewGalleryDto } from './dto/update-review-gallery.dto';

@Injectable()
export class ReviewGalleryService {
  constructor(
    @InjectModel(ReviewGallery.name)
    private reviewGalleryModel: Model<ReviewGallery>,
  ) {}

  async create(data: CreateReviewGalleryDto) {
    const review = new this.reviewGalleryModel(data);
    return await review.save();
  }

  async findAll() {
    const reviews = await this.reviewGalleryModel.find();
    return reviews;
  }

  async findOne(id: string) {
    const review = await this.reviewGalleryModel.findById(id);

    if (!review) {
      throw new HttpException('Review not found!', 404);
    }

    return review;
  }

  async update(id: string, data: UpdateReviewGalleryDto) {
    const review = await this.reviewGalleryModel.findById(id);

    if (!review) {
      throw new HttpException('Review not found!', 404);
    }

    const result = await this.reviewGalleryModel.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      },
    );

    return result;
  }

  async remove(id: string) {
    const review = await this.reviewGalleryModel.findById(id);

    if (!review) {
      throw new HttpException('Review not found!', 404);
    }

    const deletedReview = await this.reviewGalleryModel.findByIdAndDelete(id);

    return deletedReview;
  }
}
