import { LoggingConfigs } from "./LoggingConfigs.ts";

export interface CommonConfigs {
    readonly logging: LoggingConfigs;
}

const commonConfigs: CommonConfigs = {
    logging: {
        minLevel: 2,
    },
};

export default commonConfigs;
