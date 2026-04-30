import { IOrder } from "../domain-objects/Order.ts";
import { IUser } from "../domain-objects/User.ts";

export type IOrderResponse = IOrder;
export interface ICreateOrderRequest {
    readonly dateStr: IOrder["dateStr"];
    readonly userId: IOrder["userId"];
    readonly status: IOrder["status"];
    readonly role: IUser["role"];
}
export interface IGetAllOrdersRequest {
    readonly userId: IOrder["userId"];
    readonly role: IUser["role"];
}
export interface IGetOrderRequest {
    readonly id: IOrder["id"];
    readonly userId: IOrder["userId"];
    readonly role: IUser["role"];
}
export interface IUpdateOrderRequest extends IOrder {
    readonly role: IUser["role"];
}
export interface IDeleteOrderRequest {
    readonly id: IOrder["id"];
    readonly userId: IOrder["userId"];
    readonly role: IUser["role"];
}
export interface IGetAllPendingOrdersRequest {
    readonly userId: IOrder["userId"];
    readonly role: IUser["role"];
}
