import {inject, TestBed} from "@angular/core/testing";

import {LoggerService} from "./logger.service";

describe("LoggerService", () => {

	let SUT: LoggerService;

	beforeEach(() => {

		TestBed.configureTestingModule({
			providers: [LoggerService]
		});
	});

	beforeEach(inject([
		LoggerService
	], (
		logger: LoggerService
	) => {
			SUT = logger;
			spyOn(console, "log");
		}));

	it("should log successfully", () => {
		let message = "Hello";
		SUT.log("log", message);
		expect(console.log).toHaveBeenCalledWith(message);
	});
});