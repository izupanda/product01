import { Module } from '@nestjs/common';
import { ProductDescriptionController } from './product-description.controller';
import { ProductDescriptionService } from './product-description.service';
import { ScrapeAmazonService } from './scrape-amazon.service';

@Module({
  controllers: [ProductDescriptionController],
  providers: [ProductDescriptionService, ScrapeAmazonService],
})
export class ProductDescriptionModule {}
