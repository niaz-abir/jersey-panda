import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Jersey {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: [String], required: true })
  size: string[];

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  discountPrice: number;
}

export const JerseySchema = SchemaFactory.createForClass(Jersey);
