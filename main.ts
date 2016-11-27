import {Observable} from "rxjs";

let numbers = [1,5,10];
let source = Observable.from(numbers);

class MyObserver {

  next(value) {
    console.log(`value : ${value}`);
  }

  error(err) {
    console.log(`error : ${err}`);
  }

  complete() {
    console.log('complete');
  }

}

source.subscribe(new MyObserver());