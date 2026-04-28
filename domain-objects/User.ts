export type UserRole = "client" | "admin";
export interface IUser {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly pw: string;
    readonly role: UserRole;
}
