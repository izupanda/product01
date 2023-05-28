"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDescriptionController = void 0;
const common_1 = require("@nestjs/common");
const product_description_service_1 = require("./product-description.service");
const scrape_amazon_service_1 = require("./scrape-amazon.service");
let ProductDescriptionController = class ProductDescriptionController {
    productDescriptionService;
    scrapeAmazonService;
    constructor(productDescriptionService, scrapeAmazonService) {
        this.productDescriptionService = productDescriptionService;
        this.scrapeAmazonService = scrapeAmazonService;
    }
    async createDescription(productName, marketplace, condition, scrapedDescription, price) {
        console.log('POST request received');
        const result = await this.productDescriptionService.generateDescription(productName, marketplace, condition, scrapedDescription, price);
        console.log('Result:', JSON.stringify(result));
        return result;
    }
    async scrapeAmazon(productName) {
        const result = await this.scrapeAmazonService.scrapeAmazon(productName);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('productName')),
    __param(1, (0, common_1.Body)('marketplace')),
    __param(2, (0, common_1.Body)('condition')),
    __param(3, (0, common_1.Body)('scrapedDescription')),
    __param(4, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductDescriptionController.prototype, "createDescription", null);
__decorate([
    (0, common_1.Post)('scrape-amazon'),
    __param(0, (0, common_1.Body)('productName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductDescriptionController.prototype, "scrapeAmazon", null);
ProductDescriptionController = __decorate([
    (0, common_1.Controller)('product-description'),
    __metadata("design:paramtypes", [product_description_service_1.ProductDescriptionService,
        scrape_amazon_service_1.ScrapeAmazonService])
], ProductDescriptionController);
exports.ProductDescriptionController = ProductDescriptionController;
//# sourceMappingURL=product-description.controller.js.map