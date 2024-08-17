import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JerseyModule } from './jersey/jersey.module';
import { CustomJerseyModule } from './custom-jersey/custom-jersey.module';
import { ReviewGalleryModule } from './review-gallery/review-gallery.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/jerseyPandaDB'),
    JerseyModule,
    CustomJerseyModule,
    ReviewGalleryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
