export type OrderStatus = "pending" | "complete" | "canceled";
export interface IOrder {
    readonly id: number;
    readonly dateStr: string;
    readonly userId: number;
    readonly status: OrderStatus;
}
