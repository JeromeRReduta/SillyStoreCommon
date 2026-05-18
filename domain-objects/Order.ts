export type OrderStatus = "pending" | "completed" | "canceled";
export interface IOrder {
    readonly id: number;
    readonly dateStr: string;
    readonly userId: number;
    readonly status: OrderStatus;
}
