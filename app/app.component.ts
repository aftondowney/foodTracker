import { Component, EventEmitter } from 'angular2/core';
import {FoodListComponent} from './food-list.component';
import {Food} from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Food Tracker</h1>
      </div>
        <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
        </food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];  // Food[] (or Array<Food>) identifies foods as an array of Food objects
  constructor(){
    this.foods = [
      new Food("Pizza", "It was veggie at least.", 500),
      new Food("Salad", "No dressing", 200),
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }
}
