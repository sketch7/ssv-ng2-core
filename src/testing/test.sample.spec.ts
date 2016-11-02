class Farm {

	constructor(
		private animalFactory: AnimalFactory
	) {

	}

	build() {
		const animals = ["cow", "chicken"];
		return animals.map(x => {
			return this.animalFactory.create(x);
		});
	}

}

class AnimalFactory {
	create(animal: string) {
		return {
			type: animal
		};
	}
}

describe("Test Sample", () => {
	let SUT: Farm;

	beforeEach(() => {
		SUT = new Farm(new AnimalFactory());
	});

	describe("given farm build", () => {

		it("should have default animals", () => {
			const animals = SUT.build();
			expect(animals).toBeDefined();
			expect(animals.length).toBe(2);
		});

	});
});