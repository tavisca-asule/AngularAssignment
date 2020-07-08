import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   value1: number;
   //value2: number;
   //header: string;
   //lastValue:string;
   operator: string;
   displayValue: string;
   calculatedValue : string;
   operatorSet : boolean;
   constructor(){
      this.displayValue = "";
      this.calculatedValue = "";
      //this.lastValue = "";
   }

   display(evt): void 
   {  
     this.calculatedValue = "";
     let val = evt.target.value.toString();
     if (val === '+' || val === '-' || val === '*' || val === '/') 
     {
        let lastVal = this.displayValue[this.displayValue.length - 1];
        if (lastVal === '+' || lastVal === '-' || lastVal === '*' || lastVal === '/')  
        {
          this.operatorSet = true;
        }
        if ((this.operatorSet) || (this.displayValue === '')) 
        {
          return;
        }
        this.value1 = parseFloat(this.displayValue);   
        //alert(this.value1);  
        this.operator = val;       
        this.operatorSet = true;
     }     
     this.displayValue = this.displayValue + val;       
   }
   
  allClear() : void {
    this.value1 = 0;
    this.displayValue = "";
    this.calculatedValue = "";
    this.operator="";
    this.operatorSet = false;
  }

   calculation() : void {
    let value2 = parseFloat(this.displayValue.split(this.operator)[1]);
    if(this.operator === '+')
    {
      this.calculatedValue = (this.value1 + value2).toString();
    }
    if(this.operator === '-')
    {
      this.calculatedValue = (this.value1 - value2).toString();
    }
    if(this.operator === '*')
    {
      this.calculatedValue = (this.value1 * value2).toString();
    }
    if(this.operator === '/')
    {
      this.calculatedValue = (this.value1 / value2).toString();
    }

    this.displayValue = this.calculatedValue.toString();
    this.operatorSet = false;
  }
}
