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
    previousNumber: number;
    mathActionToClearScreen: boolean;

    ngOnInit(): void {

        this.stringForNumber = "";
        //this.currentNumber = 0;
        
    }

    queueNumber(s: string) {

        if (this.mathActionToClearScreen == true) {
            this.stringForNumber = s;
            this.mathActionToClearScreen = false;
        }
        else {
            this.stringForNumber = this.stringForNumber + s;
        }
        
        
    }

    calcAction(a: string) {
        
        //if the last 
        this.mathActionToClearScreen = true;

        //use previously stored action to perform math action
        if (this.mathAction == "+") {
            this.currentNumber = (this.previousNumber + Number(this.stringForNumber));
            console.log('previousNumber: ' + this.previousNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
            this.stringForNumber = "";
        }
        else if (this.mathAction == "-") {
            this.currentNumber = (this.previousNumber - Number(this.stringForNumber));
            console.log('previousNumber: ' + this.previousNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
            this.stringForNumber = "";

        }
        else if (this.mathAction == "÷") {
            this.currentNumber = (this.previousNumber / Number(this.stringForNumber))
            console.log('previousNumber: ' + this.previousNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
            this.stringForNumber = "";

        }
        else if (this.mathAction == "x") {
            this.currentNumber = (this.previousNumber * Number(this.stringForNumber))
            console.log('previousNumber: ' + this.previousNumber);
            console.log('mathAction: ' + this.mathAction);
            console.log('stringForNumber: ' + this.stringForNumber);
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



    }

    clearScreen() {
        this.stringForNumber = "";
        this.mathAction = "";
        this.currentNumber = null;
        this.previousNumber = null;
    }
}