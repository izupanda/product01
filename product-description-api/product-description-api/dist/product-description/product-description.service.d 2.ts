export declare class ProductDescriptionService {
    generateDescription(productName: string, marketplace: string, condition: string, scrapedDescription: string, price: string): Promise<{
        itemTitle: string;
        description: string;
    }>;
}
