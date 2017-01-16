"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CalculatorComponent = (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.message = "Kunz & Leigh Coding Test";
        this.stringForNumber = "";
        //this.currentNumber = 0;
    };
    CalculatorComponent.prototype.queueNumber = function (s) {
        if (this.mathActionToClearScreen == true) {
            this.stringForNumber = s;
            this.mathActionToClearScreen = false;
        }
        else {
            this.stringForNumber = this.stringForNumber + s;
        }
    };
    CalculatorComponent.prototype.calcAction = function (a) {
        //clear screen if any of the math operation buttons was pressed
        this.mathActionToClearScreen = true;
        //use previously stored action to perform math action
        if (this.mathAction == "+") {
            this.currentNumber = (this.previousNumber + Number(this.stringForNumber));
            this.stringForNumber = "";
        }
        else if (this.mathAction == "-") {
            this.currentNumber = (this.previousNumber - Number(this.stringForNumber));
            this.stringForNumber = "";
        }
        else if (this.mathAction == "÷") {
            this.currentNumber = (this.previousNumber / Number(this.stringForNumber));
            this.stringForNumber = "";
        }
        else if (this.mathAction == "x") {
            this.currentNumber = (this.previousNumber * Number(this.stringForNumber));
            this.stringForNumber = "";
        }
        else if (this.mathAction == "=") {
        }
        else {
            this.previousNumber = +this.stringForNumber;
            this.stringForNumber = "";
        }
        this.mathAction = a;
        if (this.currentNumber != null) {
            this.stringForNumber = this.currentNumber.toString();
        }
    };
    CalculatorComponent.prototype.clearScreen = function () {
        this.stringForNumber = "";
        this.mathAction = "";
        this.currentNumber = null;
        this.previousNumber = null;
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/Home/Calculator',
    })
], CalculatorComponent);
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map