// import { Observable, Observer } from "rxjs";

import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

let numbers = [1, 5, 10];
let source = Observable.create(observer => {

  // for (let n of numbers) {
  //   debugger;
  //   observer.next(n);
  // }

  numbers.forEach((n) => observer.next(n));
  observer.complete();

});

source.subscribe(
  value => console.log(`value : ${value}`),
  (err) => console.log(`error : ${err}`),
  () => console.log('complete')
);