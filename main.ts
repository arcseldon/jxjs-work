import { Observable, Observer } from "rxjs";

let source = Observable.fromEvent(document, "mousemove")
  .map((e : MouseEvent) => {
    return {
      x: e.clientX,
      y: e.clientY
    };
  })
  .filter(value => value.x < 500);
// .map(x => x * 2)
// .filter(x => x > 5);

source.subscribe(
  value => console.log(value),
  (err) => console.log(`error : ${err}`),
  () => console.log('complete')
);