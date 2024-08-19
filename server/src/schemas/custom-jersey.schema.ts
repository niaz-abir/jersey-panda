import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class CustomJersey {
  @Prop({ required: true })
  image: string;
}

export const CustomJerseySchema = SchemaFactory.createForClass(CustomJersey);
