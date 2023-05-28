"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = require("puppeteer");
var URL = "https://www.amazon.com/";
var ScrapeAmazonService = /** @class */ (function () {
    function ScrapeAmazonService() {
    }
    ScrapeAmazonService.prototype.getProductLink = function (page, productLinkSelector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, page.$eval(productLinkSelector, function (link) { return link.href; })];
            });
        });
    };
    ScrapeAmazonService.prototype.getProductDescription = function (page, descriptionSelector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, page.$eval(descriptionSelector, function (desc) { return desc.innerText; })];
            });
        });
    };
    ScrapeAmazonService.prototype.getProductPrice = function (page, priceSelector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, page.$eval(priceSelector, function (price) { return price.innerText; })];
            });
        });
    };
    ScrapeAmazonService.prototype.scrapeAmazon = function (productName) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, productLinkSelector, productLink, descriptionSelector, description, priceSelector, price;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, puppeteer_1.default.launch()];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        return [4 /*yield*/, page.goto(URL)];
                    case 3:
                        _a.sent();
                        // assuming there is a search bar
                        return [4 /*yield*/, page.type('#twotabsearchtextbox', productName)];
                    case 4:
                        // assuming there is a search bar
                        _a.sent();
                        return [4 /*yield*/, page.keyboard.press('Enter')];
                    case 5:
                        _a.sent();
                        productLinkSelector = '.s-result-item .a-link-normal.a-text-normal';
                        return [4 /*yield*/, this.getProductLink(page, productLinkSelector)];
                    case 6:
                        productLink = _a.sent();
                        return [4 /*yield*/, page.goto(productLink)];
                    case 7:
                        _a.sent();
                        descriptionSelector = '#productDescription p';
                        return [4 /*yield*/, this.getProductDescription(page, descriptionSelector)];
                    case 8:
                        description = _a.sent();
                        priceSelector = '.a-offscreen';
                        return [4 /*yield*/, this.getProductPrice(page, priceSelector)];
                    case 9:
                        price = _a.sent();
                        return [4 /*yield*/, browser.close()];
                    case 10:
                        _a.sent();
                        return [2 /*return*/, { description: description, price: price }];
                }
            });
        });
    };
    return ScrapeAmazonService;
}());
exports.default = ScrapeAmazonService;
