import {Observable} from "rxjs";


const toObj = function(key: any): object{
  let obj = {}
  if(typeof key === "number"){
    obj = {key}
  }
   else{
    obj =  {...key}
  }
return obj
}

export const nToObject = () => (source: Observable<any>) =>
    new Observable(observer => {
      return source.subscribe({
        next(value) {
          observer.next(
            toObj(value),
          );
        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
      });
    });
