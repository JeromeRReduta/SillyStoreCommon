import { IOrder } from "../domain-objects/Order.ts";
import { IUser } from "../domain-objects/User.ts";

export interface IOrderProductResponse {
    readonly orderId: number;
    readonly productId: number;
    readonly quantity: number;
    readonly creatorId: number;
}
export type ICreateOrderProductRequest = IOrderProductResponse;
export type IGetAllOrderProductsRequest = Pick<IOrderProductResponse, "creatorId"> &
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

export type IGetProductsInPendingOrderRequest = Pick<IOrderProductResponse, "creatorId"> &
    Pick<IUser, "role">;

export type IGetProductsInOrderRequest = IGetProductsInPendingOrderRequest &
    Pick<IOrderProductResponse, "orderId">;

export interface IMergeOrderProductsInPendingOrderRequest {
    readonly role: IUser["role"];
    readonly items: Array<Pick<IOrderProductResponse, "productId" | "quantity">>;
}

export type IMergeOrderProductsinOrderRequest = IMergeOrderProductsInPendingOrderRequest &
    Pick<IOrderProductResponse, "orderId">;
