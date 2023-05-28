"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const product_description_service_1 = require("./product-description.service");
describe('ProductDescriptionService', () => {
    let service;
    beforeEach(async () => {
        const testModule = await testing_1.Test.createTestingModule({
            providers: [product_description_service_1.ProductDescriptionService],
        }).compile();
        service = testModule.get(product_description_service_1.ProductDescriptionService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=product-description.service.spec.js.map