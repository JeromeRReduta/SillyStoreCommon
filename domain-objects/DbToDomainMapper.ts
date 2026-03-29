import { type Order } from "./Order.ts";
import { type OrderProduct } from "./OrderProduct.ts";
import { type User } from "./User.ts";
import { type Product } from "./Product.ts";

export interface DbToDomainMapper {
    toUser<TDbUser>(dbUser: TDbUser): User;
    toOrder<TDbOrder>(dbOrder: TDbOrder): Order;
    toProduct<TDbProduct>(dbProduct: TDbProduct): Product;
    toOrderProduct<TOrderProduct>(dbOrderProduct: TOrderProduct): OrderProduct;
}
