import { ILog } from "./logger.model";
export declare class LoggerService {
    log(logType: string, message: string, data?: any): void;
}
export declare class Log implements ILog {
    private sourceId;
    private logger;
    constructor(sourceId: string, logger: LoggerService);
    debug(method: string, message?: string, data?: any): void;
    info(method: string, message?: string, data?: any): void;
    warn(method: string, message?: string, data?: any): void;
    error(method: string, message?: string, data?: any): void;
    private log(type, method, message?, data?);
    private buildLogMessage(method, message?);
}
