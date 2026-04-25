import { OrderStatus } from "../../../domain-objects/Order.ts";

export interface IUpdateOrderRequest {
    readonly id: number;
    readonly dateStr: string;
    readonly userId: number; // even admins will need to input user id, since goal is to update only 1 order
    readonly status: OrderStatus;
}
