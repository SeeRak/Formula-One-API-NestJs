import { Test, TestingModule } from '@nestjs/testing';
import { ConstructorsController } from './constructors.controller';
import { ConstructorsService } from './constructors.service';

describe('ConstructorsController', () => {
  let controller: ConstructorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstructorsController],
      providers: [ConstructorsService],
    }).compile();

    controller = module.get<ConstructorsController>(ConstructorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
