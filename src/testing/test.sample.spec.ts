import { ContainerMocker } from "./container-mocker";
import { Farm } from "./farm";
import { AnimalFactory } from "./animal-factory";
import { Environment } from "./environment";

describe("Test Sample - actual", () => {
	let SUT: Farm;

	beforeEach(() => {
		const container = new ContainerMocker([
			Farm,
			{ provide: AnimalFactory, useValue: AnimalFactory.prototype },
		]);

		SUT = container.get(Farm);

		spyOn(container.get(AnimalFactory), "create").and.returnValue({ type: "sheep", isRainy: true });
	});

	describe("given farm build", () => {

		it("should have default animals", () => {
			const animals = SUT.build();
			expect(animals).toBeDefined();
			expect(animals.length).toBe(2);
			expect(animals[0].type).toBe("sheep");
		});
	});

});

describe("Test Sample - lib", () => {

	describe("given farm build", () => {

		it("should have default animals", () => {
			const container = new ContainerMocker([
				Farm,
				AnimalFactory,
				Environment
			]);

			const farm = container.get(Farm);

			const animals = farm.build();
			expect(animals).toBeDefined();
			expect(animals.length).toBe(2);
			expect(animals[0].sunny).toBe(true);
		});

		it("should have deps mocked and spied", () => {
			const container = new ContainerMocker([
				Farm,
				{ provide: AnimalFactory, useValue: AnimalFactory.prototype },
			]);
			spyOn(container.get(AnimalFactory), "create").and.returnValue({ type: "sheep", rainy: true });

			const farm = container.get(Farm);
			const animals = farm.build();

			expect(animals[0].rainy).toBe(true);
		});

	});
});