var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    var LoggerService = (function () {
        function LoggerService() {
        }
        LoggerService.prototype.log = function (logType, message, data) {
            if (data) {
                console[logType](message, data);
            }
            else {
                console[logType](message);
            }
        };
        LoggerService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], LoggerService);
        return LoggerService;
    }());
    exports.LoggerService = LoggerService;
    var Log = (function () {
        function Log(sourceId, logger) {
            this.sourceId = sourceId;
            this.logger = logger;
        }
        Log.prototype.debug = function (method, message, data) {
            this.log("debug", method, message, data);
        };
        Log.prototype.info = function (method, message, data) {
            this.log("info", method, message, data);
        };
        Log.prototype.warn = function (method, message, data) {
            this.log("warn", method, message, data);
        };
        Log.prototype.error = function (method, message, data) {
            this.log("error", method, message, data);
        };
        Log.prototype.log = function (type, method, message, data) {
            this.logger.log(type, "" + this.buildLogMessage(method, message), data);
        };
        Log.prototype.buildLogMessage = function (method, message) {
            if (message) {
                return "[" + this.sourceId + "::" + method + "] " + message;
            }
            else {
                return "[" + this.sourceId + "::" + method + "]";
            }
        };
        return Log;
    }());
    exports.Log = Log;
});
