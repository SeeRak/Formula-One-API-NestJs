import { Test, TestingModule } from '@nestjs/testing';
import { ConstructorsService } from './constructors.service';

describe('ConstructorsService', () => {
  let service: ConstructorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstructorsService],
    }).compile();

    service = module.get<ConstructorsService>(ConstructorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
