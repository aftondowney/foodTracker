import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="col-sm-6">
      <h3>Add New Food</h3>
      <input placeholder="Name" #newName><br>
      <input placeholder="Details" #newDetails><br>
      <input type="number" placeholder="Calories" #newCalories><br>
      <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var name = userName.value;
    var details = userDetails.value;
    var calories = parseInt(userCalories.value);
    var newFood = new Food(name, details, calories);
    this.onSubmitNewFood.emit(newFood);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";

  }
  }
