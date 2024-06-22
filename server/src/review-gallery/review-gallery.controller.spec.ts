import { Test, TestingModule } from '@nestjs/testing';
import { ReviewGalleryController } from './review-gallery.controller';
import { ReviewGalleryService } from './review-gallery.service';

describe('ReviewGalleryController', () => {
  let controller: ReviewGalleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewGalleryController],
      providers: [ReviewGalleryService],
    }).compile();

    controller = module.get<ReviewGalleryController>(ReviewGalleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
