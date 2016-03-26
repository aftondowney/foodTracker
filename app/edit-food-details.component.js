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
    var EditFoodDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditFoodDetailsComponent = (function () {
                function EditFoodDetailsComponent() {
                }
                EditFoodDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-food-details',
                        inputs: ['food'],
                        template: "\n    <h3>Selected Food: {{ food.name}}</h3>\n    <div class=\"col-sm-6\">\n    <li><h4>Name: {{ food.name }}</h4></li>\n    <li><h4>Details: {{ food.details }}</h4></li>\n    <li><h4>Calories: {{ food.calories }}</h4></li>\n    </div>\n    <div class=\"col-sm-6 food-form\">\n    <label class=\"edit-label\">Edit Name:</label><input [(ngModel)]=\"food.name\"/><br>\n    <label class=\"edit-label\">Edit Details:</label><input [(ngModel)]=\"food.details\"/><br>\n    <label class=\"edit-label\">Edit Calories:</label><input [(ngModel)]=\"food.calories\"/>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditFoodDetailsComponent);
                return EditFoodDetailsComponent;
            }());
            exports_1("EditFoodDetailsComponent", EditFoodDetailsComponent);
        }
    }
});
//# sourceMappingURL=edit-food-details.component.js.map