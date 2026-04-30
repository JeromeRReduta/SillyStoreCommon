import { IUser } from "../domain-objects/User.ts";

export type TokenResponse = string;
export type IUserResponse = Omit<IUser, "pw">;
export interface IUserWithPwHashResponse extends IUserResponse {
    pwHash: string;
}
export type ICreateUserRequest = Omit<IUser, "id">;
export type IGetAllUsersRequest = object;
export type IGetUserRequest = Pick<IUser, "id">;
export type IUpdateUserRequest = IUser;
export type IDeleteUserRequest = Pick<IUser, "id">;
export interface IGetUserByCredentialsRequest {
    readonly email: IUser["email"];
    readonly pw: IUser["pw"];
}
