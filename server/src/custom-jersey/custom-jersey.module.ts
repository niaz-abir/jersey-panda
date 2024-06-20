import { Module } from '@nestjs/common';
import { CustomJerseyService } from './custom-jersey.service';
import { CustomJerseyController } from './custom-jersey.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CustomJerseyController],
  providers: [CustomJerseyService, PrismaService],
})
export class CustomJerseyModule {}
