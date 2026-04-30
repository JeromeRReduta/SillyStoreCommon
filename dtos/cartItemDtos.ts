import { ICartItem } from "../domain-objects/CartItem.ts";
import { IUser } from "../domain-objects/User.ts";

export type ICartItemResponse = ICartItem;
export type ICartItemResponseWithCreator = Required<ICartItem>;
export type ICreateCartItemRequest = ICartItem;
export interface IGetAllCartItemsRequest extends ICartItem {
    readonly role: IUser["role"];
}
export interface IGetCartItemRequest {
    readonly orderId: ICartItem["orderId"];
    readonly productId: ICartItem["productId"];
    readonly creatorId: ICartItem["creatorId"];
    readonly role: IUser["role"];
}
export interface IUpdateCartItemRequest extends ICartItem {
    readonly role: IUser["role"];
}
export interface IDeleteCartItemRequest {
    readonly orderId: ICartItem["orderId"];
    readonly productId: ICartItem["productId"];
    readonly creatorId: ICartItem["creatorId"];
    readonly role: IUser["role"];
}
export type IGetOrdersIncludingProductRequest = Pick<ICartItem, "productId" | "creatorId"> &
    Pick<IUser, "role">;
export interface IGetPendingCartItemsRequest {
    readonly creatorId: ICartItem["creatorId"];
    readonly role: IUser["role"];
}
export interface IGetCartItemsInOrderRequest extends IGetPendingCartItemsRequest {
    readonly orderId: ICartItem["orderId"];
}
export interface IMergePendingCartItemsRequest {
    readonly role: IUser["role"];
    readonly creatorId: Required<ICartItem["creatorId"]>;
    readonly cartItems: Array<Pick<ICartItem, "productId" | "quantity">>;
}
export interface IMergePendingCartItemsInOrderRequest extends IMergePendingCartItemsRequest {
    readonly orderId: ICartItem["orderId"];
}
