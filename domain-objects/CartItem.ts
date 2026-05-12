import { IOrder } from "./Order.ts";
import { IProduct } from "./Product.ts";

export interface ICartItem {
    readonly creatorId?: number;
    readonly orderId: IOrder["id"]
    readonly productId: IProduct["id"] 
    readonly description: IProduct["description"];
    readonly imageSrc: IProduct["imageSrc"];
    readonly price: IProduct["price"]
    readonly quantity: number;
    readonly title: IProduct["title"];
}
