"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const product_description_controller_1 = require("./product-description.controller");
describe('ProductDescriptionController', () => {
    let controller;
    beforeEach(async () => {
        const testModule = await testing_1.Test.createTestingModule({
            controllers: [product_description_controller_1.ProductDescriptionController],
        }).compile();
        controller = testModule.get(product_description_controller_1.ProductDescriptionController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=product-description.controller.spec.js.map