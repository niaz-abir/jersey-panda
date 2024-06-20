import { Module } from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { JerseyController } from './jersey.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JerseyController],
  providers: [JerseyService, PrismaService],
})
export class JerseyModule {}
