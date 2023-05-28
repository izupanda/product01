import { Controller, Post, Body } from '@nestjs/common';
import { ProductDescriptionService } from './product-description.service';
import { ScrapeAmazonService } from './scrape-amazon.service';


@Controller('product-description')
export class ProductDescriptionController {
  constructor(
    private readonly productDescriptionService: ProductDescriptionService,
    private readonly scrapeAmazonService: ScrapeAmazonService
  ) {}

  @Post()
  async createDescription(
    @Body('productName') productName: string, 
    @Body('marketplace') marketplace: string, 
    @Body('condition') condition: string,
    @Body('scrapedDescription') scrapedDescription: string, 
    @Body('price') price: string
  ): Promise<any> {
    console.log('POST request received');
    const result = await this.productDescriptionService.generateDescription(productName, marketplace, condition, scrapedDescription, price);
    console.log('Result:', JSON.stringify(result));
    return result;
  }

  @Post('scrape-amazon')
  async scrapeAmazon(@Body('productName') productName: string): Promise<any> {
    const result = await this.scrapeAmazonService.scrapeAmazon(productName);
    return result;
  }
}
