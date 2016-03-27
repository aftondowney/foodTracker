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
    <div class="col-sm-2"></div>
    <div class="col-sm-4">
      <new-food (onSubmitNewFood)="createFood($event)"></new-food>
    </div>

    <div class="col-sm-4">
      <h3>Daily Food Log</h3>
      <food-display
      *ngFor="#currentFood of foodList | calorie:filterCalorie" (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood" [food]="currentFood">
      </food-display>

      <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="low">Foods under 300 cals</option>
      <option value="high">Foods over 300 cals</option>
      </select>
    </div>
    <div class="col-sm-2"></div>
  </div>

  <div class="row">
      <edit-food-details *ngIf="selectedFood"
      [food]="selectedFood">
      </edit-food-details>
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
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood): void {
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterCalorie = filterOption;
  }
}
