import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';




@Component({
    selector: 'my-app',
    templateUrl: '/Home/Calculator',
   

})


export class CalculatorComponent implements OnInit {
    stringForNumber: string;
    mathAction: string;
    currentNumber: number;
    holdNumber: number;

    ngOnInit(): void {

        this.stringForNumber = "";
        
    }

    queueNumber(s: string) {
        this.stringForNumber = this.stringForNumber + s;
    }

    calcAction(a: string) {
        //÷ x - = +
        
        
        //use previously stored action to perform math action
        if (this.mathAction == "+") {
            this.stringForNumber = (this.holdNumber + Number(this.stringForNumber)).toString();
            console.log('holdNumber: ' + this.holdNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
        }
        else if (this.mathAction == "-") {
            this.stringForNumber = (this.holdNumber - Number(this.stringForNumber)).toString();
            console.log('holdNumber: ' + this.holdNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
        
        }
        else if (this.mathAction == "÷") {
            this.stringForNumber = (this.holdNumber / Number(this.stringForNumber)).toString();
            console.log('holdNumber: ' + this.holdNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
        
        }
        else if (this.mathAction == "x") {
            this.stringForNumber = (this.holdNumber * Number(this.stringForNumber)).toString();
            console.log('holdNumber: ' + this.holdNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
        
        }

        this.holdNumber = +this.stringForNumber;
        this.mathAction = a;
        this.stringForNumber = "";
    }
}