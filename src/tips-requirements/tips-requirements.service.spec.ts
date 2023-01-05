import { Test, TestingModule } from '@nestjs/testing';
import { TipsRequirementsService } from './tips-requirements.service';

describe('TipsRequirementsService', () => {
  let service: TipsRequirementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipsRequirementsService],
    }).compile();

    service = module.get<TipsRequirementsService>(TipsRequirementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
