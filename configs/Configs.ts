import { requireNumber, requireStr } from "./ConfigValidation.ts";

export interface Configs {
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

/** Note - if .env files/configs are improperly set, this SHOULD crash */
const configs: Configs = {
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
