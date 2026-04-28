export interface ICartItem {
    readonly orderId: number;
    readonly productId: number;
    readonly quantity: number;
    readonly creatorId?: number;
}
