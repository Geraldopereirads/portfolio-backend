import { Test, TestingModule } from '@nestjs/testing';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';

describe('BackendController', () => {
  let controller: BackendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackendController],
      providers: [BackendService],
    }).compile();

    controller = module.get<BackendController>(BackendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
