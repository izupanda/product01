"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeAmazonService = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const URL = "https://www.amazon.co.jp/";
class ScrapeAmazonService {
    async getProductLink(page, productLinkSelector) {
        await page.waitForSelector(productLinkSelector, { visible: true });
        return page.$eval(productLinkSelector, (link) => link.href);
    }
    async getProductDescription(page, descriptionSelector) {
        await page.waitForSelector(descriptionSelector, { visible: true });
        return page.$eval(descriptionSelector, (desc) => desc.innerText);
    }
    async getProductPrice(page, priceSelector) {
        await page.waitForSelector(priceSelector, { visible: true });
        return page.$eval(priceSelector, (price) => price.innerText);
    }
    async scrapeAmazon(productName) {
        const browser = await puppeteer_1.default.launch({
            headless: false,
            slowMo: 50,
            args: ['--window-size=1920,1080'],
        });
        const page = await browser.newPage();
        await page.goto(URL, { waitUntil: 'networkidle0', timeout: 0 });
        await page.type('#twotabsearchtextbox', productName);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 }),
            page.keyboard.press('Enter')
        ]);
        const productLinkSelector = '.s-card-container .a-section a.a-link-normal';
        const productLink = await this.getProductLink(page, productLinkSelector);
        const productPage = await browser.newPage();
        await productPage.goto(productLink, { waitUntil: 'networkidle0', timeout: 0 });
        const descriptionSelector = '#feature-bullets .a-list-item';
        const description = await this.getProductDescription(productPage, descriptionSelector);
        const priceSelector = '.a-offscreen';
        const price = await this.getProductPrice(productPage, priceSelector);
        await browser.close();
        return { description, price };
    }
}
exports.ScrapeAmazonService = ScrapeAmazonService;
//# sourceMappingURL=scrape-amazon.service.js.map