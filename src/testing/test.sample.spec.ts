import { ContainerMocker } from "./container-mocker";
import { Farm } from "./farm";
import { AnimalFactory } from "./animal-factory";
import { Environment } from "./environment";


describe("Test Sample", () => {
	let SUT: Farm;

	beforeEach(() => {
		const container = new ContainerMocker([
			Farm,
			AnimalFactory,
			// Environment
		]);

		SUT = container.get(Farm);
		container.getAndSpy(Environment, "isSunny").and.returnValue("xx");
		spyOn(container.get(Environment), "isSunny").and.returnValue(false);
	});

	describe("given farm build", () => {

		it("should have default animals", () => {
			const animals = SUT.build();
			expect(animals).toBeDefined();
			expect(animals.length).toBe(2);
			expect(animals[0].sunny).toBe(true);
		});

	});
});