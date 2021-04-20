import { Test, TestingModule } from '@nestjs/testing';
import { RoutecController } from './routec.controller';

describe('RoutecController', () => {
  let controller: RoutecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutecController],
    }).compile();

    controller = module.get<RoutecController>(RoutecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
