import { Injectable } from "@angular/core";

@Injectable()
export class AnimalFactory {
	create(animal: string) {
		return {
			type: animal
		};
	}
}