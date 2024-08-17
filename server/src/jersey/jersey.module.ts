import { Module } from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { JerseyController } from './jersey.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Jersey, JerseySchema } from 'src/schemas/jersey.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Jersey.name,
        schema: JerseySchema,
      },
    ]),
  ],
  controllers: [JerseyController],
  providers: [JerseyService],
})
export class JerseyModule {}
