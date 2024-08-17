import { Module } from '@nestjs/common';
import { CustomJerseyService } from './custom-jersey.service';
import { CustomJerseyController } from './custom-jersey.controller';

@Module({
  controllers: [CustomJerseyController],
  providers: [CustomJerseyService],
})
export class CustomJerseyModule {}
