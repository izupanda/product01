"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDescriptionModule = void 0;
const common_1 = require("@nestjs/common");
const product_description_controller_1 = require("./product-description.controller");
const product_description_service_1 = require("./product-description.service");
const scrape_amazon_service_1 = require("./scrape-amazon.service");
let ProductDescriptionModule = class ProductDescriptionModule {
};
ProductDescriptionModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_description_controller_1.ProductDescriptionController],
        providers: [product_description_service_1.ProductDescriptionService, scrape_amazon_service_1.ScrapeAmazonService],
    })
], ProductDescriptionModule);
exports.ProductDescriptionModule = ProductDescriptionModule;
//# sourceMappingURL=product-description.module.js.map