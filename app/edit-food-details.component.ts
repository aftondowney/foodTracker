import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="food-details">{{ food.name}} Details</h3>
    </div>
    <div class="panel-body">
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <li><h4>{{ food.name }}</h4></li>
        <li><h4>{{ food.details }}</h4></li>
        <li><h4>{{ food.calories }} calories</h4></li>
      </div>
      <div class="col-sm-2 labels">
        <label class="edit-label"><h5>Edit Name:</h5></label>
        <label class="edit-label"><h5>Edit Details:</h5></label>
        <label class="edit-label"><h5>Edit Calories:</h5></label>
      </div>
      <div class="col-sm-2">
        <input class="input-margin" [(ngModel)]="food.name"/><br>
        <input class="input-margin" [(ngModel)]="food.details"/><br>
        <input class="input-margin" [(ngModel)]="food.calories"/>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
