var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./logger.service"], function (require, exports, core_1, logger_service_1) {
    "use strict";
    var LoggerFactory = (function () {
        function LoggerFactory(loggerService) {
            this.loggerService = loggerService;
        }
        LoggerFactory.prototype.getInstance = function (sourceId) {
            return new logger_service_1.Log(sourceId, this.loggerService);
        };
        LoggerFactory = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [logger_service_1.LoggerService])
        ], LoggerFactory);
        return LoggerFactory;
    }());
    exports.LoggerFactory = LoggerFactory;
});

//# sourceMappingURL=logger.factory.js.map
