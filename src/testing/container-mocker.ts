import { ReflectiveInjector, Provider } from "@angular/core";

export class ContainerMocker {

	private resolver: ReflectiveInjector;

	constructor(...providers: Provider[]) {
		this.resolver = ReflectiveInjector.resolveAndCreate(providers);
	}

	get<T>(token: any): T {
		return this.resolver.get(token);
	}

}