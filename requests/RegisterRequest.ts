import { LoginRequest } from "./LoginRequest";

export interface RegisterRequest extends LoginRequest {
    readonly email: string;
}
