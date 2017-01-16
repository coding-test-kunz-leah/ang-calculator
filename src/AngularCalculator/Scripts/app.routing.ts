import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './calculator.component';




export const routes: Routes = [
    { path: '', redirectTo: '/Home/Calculator', pathMatch: 'full' },
    {
            path: 'Home/Calculator',
            component: CalculatorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }