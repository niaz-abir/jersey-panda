import { Test, TestingModule } from '@nestjs/testing';
import { CustomJerseyController } from './custom-jersey.controller';
import { CustomJerseyService } from './custom-jersey.service';

describe('CustomJerseyController', () => {
  let controller: CustomJerseyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomJerseyController],
      providers: [CustomJerseyService],
    }).compile();

    controller = module.get<CustomJerseyController>(CustomJerseyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
