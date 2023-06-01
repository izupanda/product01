import { ProductDescriptionService } from './product-description.service';
import { ScrapeAmazonService } from './scrape-amazon.service';
export declare class ProductDescriptionController {
    private readonly productDescriptionService;
    private readonly scrapeAmazonService;
    constructor(productDescriptionService: ProductDescriptionService, scrapeAmazonService: ScrapeAmazonService);
    createDescription(productName: string, marketplace: string, condition: string, scrapedDescription: string, price: string): Promise<any>;
    scrapeAmazon(productName: string): Promise<any>;
}
