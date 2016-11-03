import { Injectable } from "@angular/core";

import { Environment } from "./environment";

@Injectable()
export class AnimalFactory {

	constructor(
		private environment: Environment
	) {

	}

	create(animal: string) {
		return {
			type: animal,
			sunny: this.environment.isSunny()
		};
	}
}