import commonConfigs from "../configs/CommonConfigs.ts";
import logger from "../logging/CommonLogger.ts";

function checkLogger(): void {
    logger.debug("dir is", process.env.dirname);
    logger.info("This works!");
}

function checkEnvVars(): void {
    const { DATABASE_URL, JWT_SECRET, MIN_LOG_LEVEL, PORT } = process.env;
    logger.debug("env vars from example:\n", [
        DATABASE_URL,
        JWT_SECRET,
        MIN_LOG_LEVEL,
        PORT,
    ]);
}

function checkConfigs(): void {
    logger.debug("configs: ", commonConfigs);
}

function main() {
    checkLogger();
    checkEnvVars();
    checkConfigs();
}

main();
