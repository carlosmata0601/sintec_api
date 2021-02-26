import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './product.resolvers';
import { ProductsService } from './product.service';
import { Product } from './entities/products.entity';
import { ProductType } from './entities/productType.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, ProductType])
    ],
    providers: [ProductsService, ProductsResolver]
})

export class ProductsModule { }