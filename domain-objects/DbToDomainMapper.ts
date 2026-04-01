import { type Order } from "./Order.ts";
import { type OrderProduct } from "./OrderProduct.ts";
import { type User } from "./User.ts";
import { type Product } from "./Product.ts";

export interface DbToDomainMapper<
    TDbUser,
    TDbOrder,
    TDbProduct,
    TOrderProduct,
> {
    toUser(dbUser: TDbUser): User;
    toOrder(dbOrder: TDbOrder): Order;
    toProduct(dbProduct: TDbProduct): Product;
    toOrderProduct(dbOrderProduct: TOrderProduct): OrderProduct;
}
