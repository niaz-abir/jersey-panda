import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { JerseyModule } from './jersey/jersey.module';
import { CustomJerseyModule } from './custom-jersey/custom-jersey.module';
import { ReviewGalleryModule } from './review-gallery/review-gallery.module';

@Module({
  imports: [JerseyModule, CustomJerseyModule, ReviewGalleryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
