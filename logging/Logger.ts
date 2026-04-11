import { ILogObj, Logger } from "tslog";
import configs from "../configs/Configs.ts";

const logger: Logger<ILogObj> = new Logger({
    minLevel: configs.logging.minLevel,
    maskValuesOfKeys: ["pw", "pw_hash"],
});

export default logger;
