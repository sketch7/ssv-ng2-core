import {Component} from "@angular/core";

@Component({
	selector: "ssv-checkbox",
	template: `
	<input class="hidden" type="checkbox">
	<label>
		SSV CORE UI
		<ng-content></ng-content>
	</label>
`
})
export class CheckboxComponent {

}