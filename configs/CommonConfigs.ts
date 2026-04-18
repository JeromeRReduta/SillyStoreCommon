import { requireNumber, requireStr } from "./ConfigValidation.ts";
import { IDbConfigs } from "./DbConfigs.ts";
import { IJwtConfigs } from "./JwtConfigs.ts";
import { LoggingConfigs } from "./LoggingConfigs.ts";

export interface ICommonConfigs {
    readonly db: IDbConfigs;
    readonly jwt: IJwtConfigs;
    readonly logging: LoggingConfigs;
}

const { DATABASE_URL, JWT_SECRET, MIN_LOG_LEVEL, PORT } = process.env;
const commonConfigs: ICommonConfigs = {
    db: {
        port: requireNumber("port", PORT),
        databaseUrl: requireStr("database url", DATABASE_URL),
    },
    jwt: {
        secret: requireStr("jwt secret", JWT_SECRET),
    },
    logging: {
        minLevel: requireNumber("min log level", MIN_LOG_LEVEL),
    },
};

export default commonConfigs;
