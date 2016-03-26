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
    var NewFoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewFoodComponent = (function () {
                function NewFoodComponent() {
                    this.onSubmitNewFood = new core_1.EventEmitter();
                }
                NewFoodComponent.prototype.addFood = function (name, details, calories) {
                    this.newFood = [
                        name.value,
                        details.value,
                        calories.value];
                    this.onSubmitNewFood.emit(this.newFood);
                    name.value = "";
                    details.value = "";
                    calories.value = "";
                };
                NewFoodComponent = __decorate([
                    core_1.Component({
                        selector: 'new-food',
                        outputs: ['onSubmitNewFood'],
                        template: "\n    <div class=\"col-sm-6\">\n      <h3>Add New Food</h3>\n      <input placeholder=\"Name\" #newName><br>\n      <input placeholder=\"Details\" #newDetails><br>\n      <input placeholder=\"Calories\" #newCalories><br>\n      <button (click)=\"addFood(newName, newDetails, newCalories)\">Add</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewFoodComponent);
                return NewFoodComponent;
            }());
            exports_1("NewFoodComponent", NewFoodComponent);
        }
    }
});
//# sourceMappingURL=new-food.component.js.map