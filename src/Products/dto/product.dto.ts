import { InputProduct, InputProductType, ProductTypes } from "src/graphql";
import { IsNotEmpty } from 'class-validator';


export class ProductTypeDto extends InputProductType {
    @IsNotEmpty()
    name: string;
}

export class ProductDto extends InputProduct {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    photo: string;

}