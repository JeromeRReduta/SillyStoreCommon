import { Order } from "./Order";
import { OrderProduct } from "./OrderProduct";
import { User } from "./User";
import { Product } from "./Product";

export interface DbToDomainMapper {
    toUser<TDbUser>(dbUser: TDbUser): User;
    toOrder<TDbOrder>(dbOrder: TDbOrder): Order;
    toProduct<TDbProduct>(dbProduct: TDbProduct): Product;
    toOrderProduct<TOrderProduct>(dbOrderProduct: TOrderProduct): OrderProduct;
}
