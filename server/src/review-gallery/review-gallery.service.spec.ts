import { Test, TestingModule } from '@nestjs/testing';
import { ReviewGalleryService } from './review-gallery.service';

describe('ReviewGalleryService', () => {
  let service: ReviewGalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewGalleryService],
    }).compile();

    service = module.get<ReviewGalleryService>(ReviewGalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
