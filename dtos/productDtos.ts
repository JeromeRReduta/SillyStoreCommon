import { IProduct } from "../domain-objects/Product.ts";

export type IProductResponse = IProduct;
export interface IProductWithQuantityResponse extends IProductResponse {
    readonly quantity: number;
}
export type ICreateProductRequest = Omit<IProduct, "id">;
export type IGetAllProductsRequest = object;
export type IGetProductRequest = Pick<IProduct, "id">;
export type IUpdateProductRequest = IProduct;
export type IDeleteProductRequest = Pick<IProduct, "id">;
