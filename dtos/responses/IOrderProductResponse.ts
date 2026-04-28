export interface IOrderProductResponse {
    readonly orderId: number;
    readonly productId: number;
    readonly quantity: number;
    readonly creatorId: number;
}

export type ICreateOrderProductRequest = IOrderProductResponse;
export type IGetAllOrderProductsRequest = Pick<
    IOrderProductResponse,
    "creatorId"
> & { readonly isAdmin: boolean };

export interface IGetAllOrderProductsRequest {}
export interface IGetOrderProductRequest {
    readonly orderId: number;
    readonly productId: number;
    readonly userId: number | null;
}
export interface IUpdateOrderProductRequest {
    readonly orderId: number;
    readonly productId: number;
    readonly userId: number | null;
    readonly quantity: number;
}

export interface IDeleteOrderProductRequest {
    readonly orderId: number;
    readonly productId: number;
    readonly userId: number | null;
}
