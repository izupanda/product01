"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDescriptionService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let ProductDescriptionService = class ProductDescriptionService {
    async generateDescription(productName, marketplace, condition, scrapedDescription, price) {
        try {
            const chatGptResponse = await axios_1.default.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: `あなたは私の代わりに${marketplace} にて${productName} を出品するための商品名と商品説明文を日本語で生成してください。${productName}の状態は${condition}です。商品名を出力する前は「商品名：」と出力してください。商品説明文を出力する前は「商品説明文：」と出力してください。なお、同時に複数のフリマサイトで出品しているため、購入前にコメントをもらうように注意文を記述してください。`,
                    },
                ],
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            });
            const fullResponse = chatGptResponse.data.choices[0].message.content;
            let [itemTitle, description] = fullResponse.split('---').map(str => str.trim());
            if (typeof itemTitle !== 'string') {
                itemTitle = JSON.stringify(itemTitle);
            }
            if (typeof description !== 'string') {
                description = JSON.stringify(description);
            }
            return { itemTitle, description };
        }
        catch (err) {
            if (err.response && err.response.data) {
                console.error(err.response.data);
            }
            else {
                console.error(err);
            }
            throw err;
        }
    }
};
ProductDescriptionService = __decorate([
    (0, common_1.Injectable)()
], ProductDescriptionService);
exports.ProductDescriptionService = ProductDescriptionService;
//# sourceMappingURL=product-description.service.js.map