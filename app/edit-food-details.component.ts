import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <h3>Selected Food: {{ food.name}}</h3>
    <div class="col-sm-6">
    <li><h4>Name: {{ food.name }}</h4></li>
    <li><h4>Details: {{ food.details }}</h4></li>
    <li><h4>Calories: {{ food.calories }}</h4></li>
    </div>
    <div class="col-sm-6 food-form">
    <label class="edit-label">Edit Name:</label><input [(ngModel)]="food.name"/><br>
    <label class="edit-label">Edit Details:</label><input [(ngModel)]="food.details"/><br>
    <label class="edit-label">Edit Calories:</label><input [(ngModel)]="food.calories"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
