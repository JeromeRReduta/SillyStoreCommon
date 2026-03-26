/**
 *
 * TODO:
 * (x) 1. migrate Logger to SillyStoreDTOs
 * (x) 2. Change SillyStoreDTOs title to SillyStoreCommon
 *  (x) 2.5. Explicitly set NODE_ENV in npm run dev to "development"
 * (x) 3. SillyStoreCommon - make config file that parses process.env
 * 4. SillyStoreCommon - make Logger take level from config, not process.env directly
 *
 */

import { ILogObj, Logger } from "tslog";
import configs from "../configs/Configs";

const logger: Logger<ILogObj> = new Logger({ minLevel: configs.logging.level });

export default logger;
