import { LoginRequest } from "./LoginRequest.ts";

export interface RegisterRequest extends LoginRequest {
    readonly email: string;
}
