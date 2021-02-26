import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/graphql";
import { Repository } from "typeorm";
import { Product as ProductEntity } from "./entities/products.entity";
import { ProductType } from "./entities/productType.entity";
import { getManager } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity) private productsRepo: Repository<ProductEntity>,
        @InjectRepository(ProductType) private productsRepoType: Repository<ProductType>
    ) { }

    async create(productDto: ProductEntity): Promise<ProductEntity> {
        console.log("INPUT", productDto);
        let newProduct = await this.productsRepo.save(productDto);
        console.log("RESPONSE", newProduct)
        return newProduct;
    }

    async createProductType(productTypeDto: ProductType): Promise<ProductType> {
        console.log("Input", productTypeDto)
        const type = await this.productsRepoType.save(productTypeDto)
        console.log("TYPE", type)
        return type;
    }

    async update(productDto: ProductEntity): Promise<ProductEntity> {
        console.log("INPUT", productDto);
        const entityManager = getManager();
        if (productDto.types) {
            await entityManager.query(`delete from types where "productId" = ${productDto.id}`);
        }

        let newProduct = await this.productsRepo.save(productDto);
        console.log("RESPONSE", newProduct)

        return newProduct;
    }

    async findProductTypes(): Promise<ProductType[]> {
        const productTypes = await this.productsRepoType.find();
        return productTypes;
    }

    async find(): Promise<Product[] | ProductEntity[]> {
        const products = await this.productsRepo.find({ relations: ["types"] });
        return products;
    }

    async delete(id: number): Promise<any> {
        console.log("Eliminar", id);
        let response = await this.productsRepo.delete(id);
        console.log("Response", response)
        return {
            status: response.affected === 0 ? false : true,
            message: response.affected === 0 ? "Elemento no existe " : "Eliminado correctamente"
        }
    }
}