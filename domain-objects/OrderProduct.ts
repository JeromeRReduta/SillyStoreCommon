/** Entry linking an order & product together, i.e. order-product junction table entry */
export interface OrderProduct {
    readonly orderId: number;
    readonly productId: number;
    readonly quantity: number;
}
