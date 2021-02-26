
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputProductType {
    id?: string;
    name?: string;
}

export class InputProduct {
    name?: string;
    photo?: string;
    active?: boolean;
    count?: number;
    types?: InputProductType[];
}

export class InputUpdate {
    id?: number;
    name?: string;
    photo?: string;
    active?: boolean;
    count?: number;
    types?: InputProductType[];
}

export class Product {
    id?: string;
    name?: string;
    photo?: string;
    active?: boolean;
    type?: ProductTypes[];
    count?: number;
    createdAt?: string;
    types?: ProductTypes[];
}

export class ProductTypes {
    id?: string;
    name?: string;
}

export class Response {
    status?: boolean;
    message?: string;
}

export abstract class IQuery {
    abstract getProducts(id?: number): Product[] | Promise<Product[]>;

    abstract getProductTypes(): ProductTypes[] | Promise<ProductTypes[]>;
}

export abstract class IMutation {
    abstract createProductType(input?: InputProductType): ProductTypes | Promise<ProductTypes>;

    abstract createProduct(input?: InputProduct): Product | Promise<Product>;

    abstract updateProduct(input?: InputUpdate): Product | Promise<Product>;

    abstract deleteProduct(id?: number): Response | Promise<Response>;
}
