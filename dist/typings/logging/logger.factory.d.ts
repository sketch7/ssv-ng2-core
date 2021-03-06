import { ILog } from "./logger.model";
import { LoggerService } from "./logger.service";
export declare class LoggerFactory {
    private loggerService;
    constructor(loggerService: LoggerService);
    get(sourceId: string): ILog;
}
