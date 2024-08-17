import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Jersey {
  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ type: [String], required: true })
  size: string[];

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  orginalPrice: number;

  @Prop({ required: true })
  discountPrice: number;
}

export const JerseySchema = SchemaFactory.createForClass(Jersey);
