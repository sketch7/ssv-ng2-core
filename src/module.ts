import { NgModule } from "@angular/core";

import { LOGGER_PROVIDERS } from "./logging/index";

@NgModule({
	providers: [
		LOGGER_PROVIDERS
	]
})
export class CoreModule {
}