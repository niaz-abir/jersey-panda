import { Module } from '@nestjs/common';
import { CustomJerseyService } from './custom-jersey.service';
import { CustomJerseyController } from './custom-jersey.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CustomJersey,
  CustomJerseySchema,
} from 'src/schemas/custom-jersey.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CustomJersey.name,
        schema: CustomJerseySchema,
      },
    ]),
  ],
  controllers: [CustomJerseyController],
  providers: [CustomJerseyService],
})
export class CustomJerseyModule {}
