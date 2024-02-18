import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title: string = 'Hola Mundo!';
 public counter: number = 10;

increment(value: number) {
  this.counter+= value;
}
decrement(value: number) {
  this.counter-=value;
}
reset() {
  this.counter=10;
}

}
