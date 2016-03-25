import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food Tracker</h1>
    <h3>{{ food.name }}</h3>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("pizza", "It had veggies.", 500, 0),
      new Food("salad", "no dressing", 250, 0),
    ];
  }
}

export class Food {
  constructor(public name: string, public details: string, public calories: number, public id: number){

  }
}
