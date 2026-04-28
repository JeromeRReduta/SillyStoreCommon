import { IOrder } from "../domain-objects/Order.ts";
import { IUser } from "../domain-objects/User.ts";

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
> &
    Pick<IUser, "role">;
export type IGetOrderProductRequest = Pick<
    IOrderProductResponse,
    "orderId" | "productId" | "creatorId"
> &
    Pick<IUser, "role">;

export type IUpdateOrderProductRequest = IOrderProductResponse;
export type IDeleteOrderProductRequest = Pick<
    IOrderProductResponse,
    "orderId" | "productId" | "creatorId"
> &
    Pick<IUser, "role">;

export type IGetOrdersIncludingProductRequest = Pick<
    IOrderProductResponse,
    "productId" | "creatorId"
> &
    Pick<IUser, "role">;

export type IGetProductsInPendingOrderRequest = Pick<
    IOrderProductResponse,
    "creatorId"
> &
    Pick<IUser, "role">;

export type IGetProductsInOrderRequest = IGetProductsInPendingOrderRequest &
    Pick<IOrderProductResponse, "orderId">;

export interface IMergeOrderProductsInPendingOrderRequest {
    readonly role: IUser["role"];
    readonly items: Array<
        Pick<IOrderProductResponse, "productId" | "quantity">
    >;
}

export type IMergeOrderProductsinOrderRequest =
    IMergeOrderProductsInPendingOrderRequest &
        Pick<IOrderProductResponse, "orderId">;

/** TODO: Sillystore common:
    * 
    * simplify dtos:
    *  Make use of Pick<TResponse or TDto> and Partial<TResponse or TDto> as necessary
    *  https://www.typescriptlang.org/docs/handbook/utility-types.html
    *   ESPECIALLY for update dtos
    *   make dtos for:
        (x) dto: merge order products by order id
        (x) dto: merge order products in pending order
        (x) dto: get products with quantities
        (x) dto: get products with quantities in pending order

    
        Then, figure out how to implement merge order products
        test for orderproduct dao, then order repo, then client order service

        THEN can finally fkin go to frontend
    * * 
    * 
    */
