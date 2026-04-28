import { ICartItem } from "../domain-objects/CartItem.ts";
import { IUser } from "../domain-objects/User.ts";

export type ICartItemResponse = ICartItem;
export type ICartItemResponseWithCreator = Required<ICartItem>;
export type ICreateCartItemRequest = ICartItem;
export type IGetAllCartItemsRequest = ICartItem & Pick<IUser, "role">;
export type IGetCartItemRequest = Pick<ICartItem, "orderId" | "productId" | "creatorId"> &
    Pick<IUser, "role">;

export type IUpdateCartItemRequest = ICartItem & Pick<IUser, "role">;
export type IDeleteCartItemRequest = Pick<ICartItem, "orderId" | "productId" | "creatorId"> &
    Pick<IUser, "role">;

export type IGetOrdersIncludingProductRequest = Pick<ICartItem, "productId" | "creatorId"> &
    Pick<IUser, "role">;

export type IGetPendingCartItemsRequest = Pick<ICartItem, "creatorId"> & Pick<IUser, "role">;

export type IGetCartItemsRequest = IGetPendingCartItemsRequest &
    Pick<ICartItem, "productId" | "orderId">;

export interface IMergePendingCartItemsRequest extends Pick<IUser, "role"> {
    readonly creatorId: number;
    readonly items: Array<Pick<ICartItem, "productId" | "quantity">>;
}
export type IMergeCartItemsRequest = IMergePendingCartItemsRequest & Pick<ICartItem, "orderId">;
