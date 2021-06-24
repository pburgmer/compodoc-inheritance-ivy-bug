import {Component, Directive, Input} from '@angular/core';

// if this decorator is removed, compodoc will work but Angular will complain about it
// error NG2007: Class is using Angular features but is not decorated. Please add an explicit Angular decorator.
@Directive()
export abstract class Parent {
  @Input()
  parentInput: number | undefined;
}

@Component({
  selector: 'app-child',
  template: ''
})
export class ChildComponent extends Parent {
  @Input()
  childInput: number | undefined;
}
