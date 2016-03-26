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
      <input placeholder="Calories" #newCalories><br>
      <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  public newFood: String[];
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement) {
    this.newFood = [
      name.value,
      details.value,
      calories.value];
    this.onSubmitNewFood.emit(this.newFood);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
