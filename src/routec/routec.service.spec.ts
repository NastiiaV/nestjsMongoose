import { Test, TestingModule } from '@nestjs/testing';
import { RoutecService } from './routec.service';

describe('RoutecService', () => {
  let service: RoutecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutecService],
    }).compile();

    service = module.get<RoutecService>(RoutecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
