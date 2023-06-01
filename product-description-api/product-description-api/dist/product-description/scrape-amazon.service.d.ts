import { Page } from 'puppeteer';
export declare class ScrapeAmazonService {
    getProductLink(page: Page, productLinkSelector: string): Promise<string>;
    getProductDescription(page: Page, descriptionSelector: string): Promise<string>;
    getProductPrice(page: Page, priceSelector: string): Promise<string>;
    scrapeAmazon(productName: string): Promise<{
        description: string;
        price: string;
    }>;
}
