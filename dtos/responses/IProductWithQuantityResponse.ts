import { IProductResponse } from "./IProductResponse.ts";

export interface IProductWithQuantityResponse extends IProductResponse {
    readonly quantity: number;
}
