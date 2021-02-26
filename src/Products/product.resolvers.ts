import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/graphql';
import { ProductsService } from './product.service';
import { ProductDto, ProductTypeDto } from './dto/product.dto';
import { Product as ProductEntity } from './entities/products.entity';
import { ProductType } from './entities/productType.entity';


@Resolver('Products')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }
    //Queries
    @Query('getProducts')
    async findOne() {
        return this.productsService.find();
    }
    @Query('getProductTypes')
    async getProductTypes() {
        return this.productsService.findProductTypes();
    }
    //Mutations
    @Mutation('createProduct')
    async create(@Args('input') args: ProductEntity): Promise<ProductEntity> {
        return await this.productsService.create(args)
    }
    @Mutation('updateProduct')
    async update(@Args('input') args: ProductEntity): Promise<ProductEntity> {
        return await this.productsService.update(args)
    }
    @Mutation('createProductType')
    async createProductType(@Args('input') args: ProductType): Promise<ProductType> {
        return await this.productsService.createProductType(args);
    }
    @Mutation('deleteProduct')
    async delete(@Args('id') args: number): Promise<any> {
        return await this.productsService.delete(args)
    }
}

