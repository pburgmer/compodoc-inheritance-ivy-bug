# CompodocInheritanceBug

Example for Issue [compodoc/issues/1075](https://github.com/compodoc/compodoc/issues/1075)

* Take a look at the example code in `scr/app/child.component.ts`
* Run `npm run compodoc` to generate the documentation to `dist/doc/documentation.json`
* Inheritance is mentioned for `ChildComponent` but neither `ParentComponent` got documented nor is the input of `ParentComponent` included in the documentation of `ChildComponent`
* Remove decorator on `ParentComponent` and run `npm run compodoc` again
* Now the input is included
* Run `npm run start` to see Angular complaining about the missing decorator
  `@Injectable` and `@Component` also don't work. Only `@Directive` satisfies Angular
