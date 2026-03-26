import { ILogObj, Logger } from "tslog";
import configs from "../configs/Configs";

const logger: Logger<ILogObj> = new Logger({
    minLevel: configs.logging.minLevel,
});

export default logger;
