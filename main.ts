import { Observable, Observer } from "rxjs";

let source = Observable.fromEvent(document, "mousemove");

// .map(x => x * 2)
// .filter(x => x > 5);

source.subscribe(
  value => console.log(value),
  (err) => console.log(`error : ${err}`),
  () => console.log('complete')
);