import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template:`
  <h4>{{ food.name }}</h4>
  `
})
export class FoodComponent {
  public food: Food;
}
