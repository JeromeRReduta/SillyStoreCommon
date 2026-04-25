export interface Order {
    readonly id: number;
    readonly dateStr: string;
    readonly note?: string;
    readonly userId: number;
    readonly status: OrderStatus;
}

export type OrderStatus = "pending" | "complete" | "canceled";
