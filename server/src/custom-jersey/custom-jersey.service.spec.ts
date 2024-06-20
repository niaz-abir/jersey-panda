import { Test, TestingModule } from '@nestjs/testing';
import { CustomJerseyService } from './custom-jersey.service';

describe('CustomJerseyService', () => {
  let service: CustomJerseyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomJerseyService],
    }).compile();

    service = module.get<CustomJerseyService>(CustomJerseyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
