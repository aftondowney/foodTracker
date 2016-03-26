import {Component, EventEmitter} from 'angular2/core';
import {FoodComponent} from './food.component';
import {EditFoodDetailsComponent} from './edit-food-details.component';
import {NewFoodComponent} from './new-food.component';
import {HealthyPipe} from './healthy.pipe';
import {Food} from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [HealthyPipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `

    <div class="row">
      <div class="col-sm-6">
        <select (change)="onChange($event.target.value)">
          <option value="all" selected="selected">Show All</option>
          <option value="high">Show High Calorie Foods</option>
          <option value="low">Show Low Calorie Foods</option>
        </select>

        <food-display *ngFor="#currentFood of foodList | healthy:filterHealthy" (click)="foodClicked(currentFood)"
        [class.selected]="currentFood === selectedFood"
        [food]="currentFood">
        </food-display>
      </div>

      <div class="col-sm-6">
        <edit-food-details *ngIf="selectedFood"
        [food]="selectedFood">
        </edit-food-details>
        </div>
    </div>


    <new-food (onSubmitNewFood)="createFood($event)"></new-food>

  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterHealthy: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    console.log("food", newFood);
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
    console.log(this.filterHealthy);
  }
}
