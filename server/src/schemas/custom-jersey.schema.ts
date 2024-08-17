import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class CustomJersey {
  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  color: string;
}

export const CustomJerseySchema = SchemaFactory.createForClass(CustomJersey);
