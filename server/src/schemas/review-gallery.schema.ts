import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class ReviewGallery {
  @Prop({ required: true })
  firstImage: string;

  @Prop({ required: true })
  secondImage: string;
}

export const ReviewGallerySchema = SchemaFactory.createForClass(ReviewGallery);
