import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',

})

export class CounterComponent {
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
