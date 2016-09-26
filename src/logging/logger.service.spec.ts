import { TestBed } from "@angular/core/testing";

import { LoggerService } from "./logger.service";

describe("LoggerService", () => {

	let SUT: LoggerService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoggerService]
		});
	});

	beforeEach(() => {
		SUT = TestBed.get(LoggerService);
		spyOn(console, "log");
	});

	it("should log successfully", () => {
		let message = "Hello";
		SUT.log("log", message);
		expect(console.log).toHaveBeenCalledWith(message);
	});
});