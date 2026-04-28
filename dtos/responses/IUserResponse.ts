export type UserRole = "client" | "admin";
export interface IUserResponse {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly role: UserRole;
}
