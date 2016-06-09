define(["require", "exports", "./logger.factory", "./logger.service", "./logger.service", "./logger.factory"], function (require, exports, logger_factory_1, logger_service_1, logger_service_2, logger_factory_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(logger_service_2);
    __export(logger_factory_2);
    exports.LOGGER_PROVIDERS = [
        logger_factory_1.LoggerFactory,
        logger_service_1.LoggerService
    ];
});

//# sourceMappingURL=logging.js.map
