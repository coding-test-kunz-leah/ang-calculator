import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';




@Component({
    selector: 'my-app',
    templateUrl: '/Home/Calculator',
   

})


export class CalculatorComponent implements OnInit {
    message: string;
    ngOnInit(): void {

        this.message = "Calci-Component Loaded.";
        
    }



}