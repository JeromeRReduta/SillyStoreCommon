export interface IUpdateOrderProductRequest {
    readonly orderId: number;
    readonly productId: number;
    readonly userId: number | null;
    readonly quantity: number;
}
