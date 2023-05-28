import { Test, TestingModule } from '@nestjs/testing';
import { ProductDescriptionModule } from './product-description.module';
import { ProductDescriptionService } from './product-description.service';



describe('ProductDescriptionService', () => {
  let service: ProductDescriptionService;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      providers: [ProductDescriptionService],
    }).compile();

    service = testModule.get<ProductDescriptionService>(ProductDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
