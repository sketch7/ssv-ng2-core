import { ReflectiveInjector, Provider } from "@angular/core";

export type Constructor<T> = { new (...args: any[]): T } | ((...args: any[]) => T) | Function;

export class ContainerMocker {

	private resolver: ReflectiveInjector;

	constructor(...providers: Provider[]) {
		this.resolver = ReflectiveInjector.resolveAndCreate(providers);
	}

	get<T>(token: Constructor<T>): T {
		return this.resolver.get(token) as T;
	}

	getAndSpy(token: any, method: string): jasmine.Spy {
		return spyOn(this.get(token), method);
	}

}
