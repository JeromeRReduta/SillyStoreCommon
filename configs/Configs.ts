import dotenv from "dotenv";
import { requireNumber, requireStr } from "./ConfigValidation.ts";

export interface Configs {
    readonly env: string;
    readonly port: number;
    readonly db: {
        readonly connectionString: string;
    };
    readonly jwt: {
        readonly secret: string;
    };
    readonly logging: {
        readonly minLevel: number;
    };
}

dotenv.config({
    debug: true,
    path: import.meta.url + "/./../.env." + process.env.NODE_ENV,
});

/** Note - if .env files/configs are improperly set, this SHOULD crash */
const configs: Configs = {
    env: requireStr("NODE_ENV", process.env.NODE_ENV),
    port: requireNumber("PORT", process.env.PORT),
    db: {
        connectionString: requireStr("DATABASE_URL", process.env.DATABASE_URL),
    },
    jwt: {
        secret: requireStr("JWT_SECRET", process.env.JWT_SECRET),
    },
    logging: {
        minLevel: requireNumber("MIN_LOG_LEVEL", process.env.MIN_LOG_LEVEL),
    },
};

export default configs;
