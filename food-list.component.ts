import {Component, EventEmitter} from 'angular2/core';
import {FoodComponent} from './food.component';
import {EditFoodDetailsComponent} from './edit-food-details.component';
import {NewFoodComponent} from './new-food.component';
import {CaloriePipe} from './calorie.pipe';
import {Food} from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriePipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `

  <div class="row">
    <div class="col-sm-6">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All</option>
        <option value="low">Foods under 300 cals</option>
        <option value="high">Foods over 300 cals</option>
      </select>

      <food-display
      *ngFor="#currentFood of foodList | calorie:filterCalorie" (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood" [food]="currentFood">
      </food-display>
    </div>

    <div class="col-sm-6">
      <edit-food-details *ngIf="selectedFood"
      [food]="selectedFood">
      </edit-food-details>
    </div>
  </div>

  <div class="row">
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  </div>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalorie: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood): void {
    console.log("food", newFood);
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterCalorie = filterOption;
    console.log(this.filterCalorie);
  }
}
