import { Injectable } from "@angular/core";

import { AnimalFactory } from "./animal-factory";

@Injectable()
export class Farm {

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
