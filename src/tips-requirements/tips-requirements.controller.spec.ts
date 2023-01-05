import { Test, TestingModule } from '@nestjs/testing';
import { TipsRequirementsController } from './tips-requirements.controller';
import { TipsRequirementsService } from './tips-requirements.service';

describe('TipsRequirementsController', () => {
  let controller: TipsRequirementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipsRequirementsController],
      providers: [TipsRequirementsService],
    }).compile();

    controller = module.get<TipsRequirementsController>(TipsRequirementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
