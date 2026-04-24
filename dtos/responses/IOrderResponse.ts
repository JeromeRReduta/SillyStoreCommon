export interface IOrderResponse {
    readonly id: number;
    readonly dateStr: string;
    readonly userId: number;
    readonly status: "pending" | "completed" | "canceled";
}
