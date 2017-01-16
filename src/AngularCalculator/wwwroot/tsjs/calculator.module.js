"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var calculator_component_1 = require("./calculator.component");
var CalculatorModule = (function () {
    function CalculatorModule() {
    }
    return CalculatorModule;
}());
CalculatorModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, material_1.MaterialModule.forRoot()],
        declarations: [calculator_component_1.CalculatorComponent],
    })
], CalculatorModule);
exports.CalculatorModule = CalculatorModule;
//# sourceMappingURL=calculator.module.js.map