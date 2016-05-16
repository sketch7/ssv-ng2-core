import {
	it,
	inject,
	describe,
	expect,
	beforeEach,
	beforeEachProviders
} from "@angular/core/testing";
import {LoggerService} from "./logger.service";

describe("LoggerService", () => {
	beforeEachProviders(() => [LoggerService]);
	beforeEach(() => {
		spyOn(console, "log");
	});

	it("should log successfully", inject([LoggerService], (logger: LoggerService) => {
		let message = "Hello";
		logger.log("log", message);
		expect(console.log).toHaveBeenCalledWith(message);
	}));
});