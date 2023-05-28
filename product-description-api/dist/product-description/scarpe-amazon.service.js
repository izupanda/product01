"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeAmazon = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const URL = "https://www.amazon.com/";
async function getProductLink(page, productLinkSelector) {
    return page.$eval(productLinkSelector, (link) => link.href);
}
async function getProductDescription(page, descriptionSelector) {
    return page.$eval(descriptionSelector, (desc) => desc.innerText);
}
async function getProductPrice(page, priceSelector) {
    return page.$eval(priceSelector, (price) => price.innerText);
}
async function scrapeAmazon(productName) {
    const browser = await puppeteer_1.default.launch();
    const page = await browser.newPage();
    await page.goto(URL);
    await page.type('#twotabsearchtextbox', productName);
    await page.keyboard.press('Enter');
    const productLinkSelector = '.s-result-item .a-link-normal.a-text-normal';
    const productLink = await getProductLink(page, productLinkSelector);
    await page.goto(productLink);
    const descriptionSelector = '#productDescription p';
    const description = await getProductDescription(page, descriptionSelector);
    const priceSelector = '.a-offscreen';
    const price = await getProductPrice(page, priceSelector);
    await browser.close();
    return { description, price };
}
exports.scrapeAmazon = scrapeAmazon;
//# sourceMappingURL=scarpe-amazon.service.js.map