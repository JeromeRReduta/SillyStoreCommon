import { ILogObj, Logger } from "tslog";
import commonConfigs from "../configs/CommonConfigs.ts";

const commonLogger: Logger<ILogObj> = new Logger({
    minLevel: commonConfigs.logging.minLevel,
    maskValuesOfKeys: ["password", "pw", "pw_hash"],
});

export default commonLogger;
