import { IOrder } from "../domain-objects/Order.ts";
import { IUser } from "../domain-objects/User.ts";

export type IOrderResponse = IOrder;
export type ICreateOrderRequest = Pick<IOrder, "dateStr" | "userId" | "status">;
export interface IGetAllOrdersRequest extends Pick<IOrder, "userId"> {
    readonly isAdmin: boolean;
}
export type IGetOrderRequest = Pick<IOrder, "id" | "userId"> & Pick<IUser, "role">;
export type IUpdateOrderRequest = IOrder & Pick<IUser, "role">;
export type IDeleteOrderRequest = Pick<IOrder, "id" | "userId"> & Pick<IUser, "role">;
export type IGetAllPendingOrdersRequest = Pick<IOrder, "userId"> & Pick<IUser, "role">;
