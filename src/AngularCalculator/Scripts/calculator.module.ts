import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { CalculatorComponent } from './calculator.component';


@NgModule({
    imports: [CommonModule, FormsModule,  MaterialModule.forRoot()],
    declarations: [CalculatorComponent],
   
})
export class CalculatorModule { }