import { requireNumber, requireStr } from "./ConfigValidation.ts";
import { DbConfigs } from "./DbConfigs.ts";
import { JwtConfigs } from "./JwtConfigs.ts";
import { LoggingConfigs } from "./LoggingConfigs.ts";

export interface CommonConfigs {
    readonly db: DbConfigs;
    readonly jwt: JwtConfigs;
    readonly logging: LoggingConfigs;
}

const { DATABASE_URL, JWT_SECRET, MIN_LOG_LEVEL, PORT } = process.env;
const commonConfigs: CommonConfigs = {
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
