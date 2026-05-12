export interface AddProductToOrderRequest {
    readonly productId: number;
    readonly orderId: number;
    readonly quantity: number;
}
