System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, Food;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.foods = [
                        new Food("pizza", "It had veggies.", 500, 0),
                        new Food("salad", "no dressing", 250, 0),
                    ];
                }
                AppComponent.prototype.foodWasSelected = function (clickedFood) {
                    console.log(clickedFood);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container\">\n    <h1>Food Tracker</h1>\n      <h3 *ngFor=\"#food of foods\" (click)=\"foodWasSelected(food)\">{{ food.description }}</h3>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Food = (function () {
                function Food(name, details, calories, id) {
                    this.name = name;
                    this.details = details;
                    this.calories = calories;
                    this.id = id;
                }
                return Food;
            }());
            exports_1("Food", Food);
        }
    }
});
//# sourceMappingURL=app.component.js.map