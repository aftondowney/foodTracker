import {Component, EventEmitter} from 'angular2/core';
import {FoodComponent} from './food.component';
import {EditFoodDetailsComponent} from './edit-food-details.component';
import {NewFoodComponent} from './new-food.component';
// import {HealthyPipe} from './healthy.pipe';
import {Food} from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  // pipes: [HealthyPipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `

  <div class="row">
    <div class="col-sm-6">

      <food-display *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)" [class.selected]="currentFood === selectedFood" [food]="currentFood">
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
  public filterHealthy: string = "all";
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
  // onChange(filterOption) {
  //   this.filterHealthy = filterOption;
  //   console.log(this.filterHealthy);
  // }
}
