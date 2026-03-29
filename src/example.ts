import configs from "../configs/Configs.ts";
import logger from "../logging/Logger.ts";

// TODO: add eslint plugin import to require .ts extensions for ts files

function checkLogger(): void {
    logger.debug("dir is", import.meta.dirname);
    logger.info("This works!");
}

function checkDotEnv(): void {
    const { DATABASE_URL, JWT_SECRET, MIN_LOG_LEVEL, PORT } = process.env;
    logger.debug("env vars from example:\n", [
        DATABASE_URL,
        JWT_SECRET,
        MIN_LOG_LEVEL,
        PORT,
    ]);
}

function checkConfigs(): void {
    logger.debug("configs: ", configs);
}

function main() {
    checkLogger();
    checkDotEnv();
    checkConfigs();
}

main();
