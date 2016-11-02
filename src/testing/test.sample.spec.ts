import { ContainerMocker } from "./container-mocker";
import { Farm } from "./farm";
import { AnimalFactory } from "./animal-factory";


describe("Test Sample", () => {
	let SUT: Farm;

	beforeEach(() => {
		const container = new ContainerMocker([
			Farm,
			AnimalFactory
		]);

		SUT = container.get<Farm>(Farm);
	});

	describe("given farm build", () => {

		it("should have default animals", () => {
			const animals = SUT.build();
			expect(animals).toBeDefined();
			expect(animals.length).toBe(2);
		});

	});
});