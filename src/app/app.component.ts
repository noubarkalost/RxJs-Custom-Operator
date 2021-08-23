import {Component} from '@angular/core';
import {of} from "rxjs";
import { nToObject} from "./operator";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    of(["noubar",1, "kaloust"],"s", 1).pipe(nToObject()).subscribe(console.log);
  }

}
/* (of) is a creation operator ( it's imported from rxjs not from rxjs/operators ) so it creates a stream of values
in a sequence from any given parameters.
We grab this values and inject them to the nToObject.next(value) to return an object for each individual value
Then we supply the console.log as an observer
*/
