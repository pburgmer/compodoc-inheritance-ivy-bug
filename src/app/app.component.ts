import {Component, Directive, Input} from '@angular/core';

// @Directive()
// export abstract class Base {
//   @Input()
//   inheritedInput: number | undefined;
// }

@Component({
  selector: 'app-root',
  template: '<app-child></app-child>'
})
export class AppComponent {
}

