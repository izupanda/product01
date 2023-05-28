import { Test, TestingModule } from '@nestjs/testing';
import { ProductDescriptionController } from './product-description.controller';

describe('ProductDescriptionController', () => {
  let controller: ProductDescriptionController;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      controllers: [ProductDescriptionController],
    }).compile();

    controller = testModule.get<ProductDescriptionController>(ProductDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
