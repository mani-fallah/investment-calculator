import { Component } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms';
import {Dataserviece} from '../../dataserviece';

@Component({
  selector: 'app-userinput',
  imports: [
    FormsModule
  ],
  standalone:true,
  templateUrl: './userinput.html',
  styleUrl: './userinput.css'
})
export class Userinput {
  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!:number;
  duration ! :number ;

  constructor(private myService: Dataserviece)  {

  }

  onSubmit() {
    const annualData = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        this.initialInvestment - this.annualInvestment * year - this.initialInvestment;
      this.myService.onAddInvestment({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }
    console.log(this.myService.getData);
  }



}
