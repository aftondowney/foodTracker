import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "low") {
      return input.filter((food) => {
        if(food.calories <= 300) {
          return true;
        }
      });
    } else if (desiredHealthyState === "high") {
      return input.filter((food) => {
        if(food.calories > 300) {
          return true;
        }
      });
    } else {
      return input;
    }
  }
}
