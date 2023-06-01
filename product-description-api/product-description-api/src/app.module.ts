import { Module } from '@nestjs/common';
import { ProductDescriptionModule } from './product-description/product-description.module';
import { ConfigModule } from '@nestjs/config'; // この行を追加

@Module({
  imports: [
    ConfigModule.forRoot(), // この行を追加
    ProductDescriptionModule
  ],
})
export class AppModule {}
