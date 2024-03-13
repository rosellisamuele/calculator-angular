import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'calc-keyboard',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './calc-keyboard.component.html',
  styleUrl: './calc-keyboard.component.css'
})
export class CalcKeyboardComponent {
  output : String = "0";
  selector : String = "";
  result : number = 0;
  newOp : boolean = false;

  autoCanc = () => {
    this.output = '0';
  }

  number = (num : number) => {
    if(this.output === "0"){
      this.output = num.toString();

    }else if(this.newOp){
      this.output = num.toString();
      this.newOp = false;
    }
    else{
      this.output = this.output + "" + num.toString();
    }
  }

  decimal = (dot : String) => {
      this.output = this.output + "" + dot;
  }

  back = () => {
      this.output = this.output.slice(0,-1);
      if(this.output === ""){
        this.output = "0";
      }
  }

  sum = () => {
    this.result = this.result + (+this.output);
    this.selector = "sum";
    this.setNewOp();
  }

  sub = () => {
    this.result = +this.output - this.result;
    this.selector = "sub";
    this.setNewOp();
  }

  mul = () => {

    if(this.result !== 0){
      this.result = +this.output * this.result;
    }else{
      this.result = +this.output;
    }


    this.result = +this.output * this.result;
    this.selector = "mul";
    this.setNewOp();
  }

  div = () => {

    if(this.result !== 0){
      this.result = +this.output / this.result;
    }else{
      this.result = +this.output;
    }
    
    this.selector = "div";
    this.setNewOp();
  }

  confirm = () => {
    switch(this.selector){
        case "sum":
          this.result = this.result + (+this.output);
          this.endOp();
          break;

        case "sub":
          this.result = this.result - (+this.output);
          this.endOp();
          break;

        case "mul":
            this.result = this.result * (+this.output);
            this.endOp();
            break;

        case "div":
          this.result = this.result / (+this.output);
          this.endOp();
          break;
    }
  }

  setNewOp = () => {
    this.output = this.result.toString();
    this.newOp = true;
  }

  endOp = () => {
    this.output = this.result.toString();
    this.newOp = true;
    this.result = 0;
  }


}

