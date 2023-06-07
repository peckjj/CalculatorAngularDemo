import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public $display: ReplaySubject<string> = new ReplaySubject(1);

  private lValue: string = '0';
  private rValue: string = '0';
  private op: string | undefined;

  constructor(private pokemonService: PokemonService) {
    this.$display.next(this.lValue);
  }

  public addInput(input: string) {
    if (input == 'C') {
      this.lValue = '0';
      this.rValue = '0';
      this.op = undefined;
      this.updateDisplay();
      return;
    }

    if (input == '.') {
      if (!this.op && !this.lValue.includes('.')) {
        this.lValue += input;
        this.updateDisplay();
        return;
      } else if (!this.rValue.includes('.')) {
        this.rValue += input;
        this.updateDisplay();
        return;
      }
    }

    if (/[0-9]/.test(input)) { // If a number key is pressed
      if (!this.op) {
        if (this.lValue == '0') {
          this.lValue = input;
          this.updateDisplay();
          return;
        } else {
          this.lValue += input;
          this.updateDisplay();
          return;
        }
      }

      if (this.rValue == '0') {
        this.rValue = input;
        this.updateDisplay();
        return;
      } else {
        this.rValue += input;
        this.updateDisplay();
        return;
      }
    }

    if (/[\/*+-]/.test(input)) { // If an op key is pressed
      this.op = input;
      this.updateDisplay();
      return;
    }

    if (input == '+/-') {
      if (!this.op) {
        this.lValue = (parseFloat(this.lValue) * -1).toString();
        this.updateDisplay();
        return;
      } else {
        this.rValue = (parseFloat(this.lValue) * -1).toString();
        this.updateDisplay();
        return;
      }
    }

    if (input == '<<') {
      if (!this.op && this.lValue != '0') {
        this.lValue = this.lValue.substring(0, this.lValue.length - 1);
        this.lValue = this.lValue == '' ? '0' : this.lValue;
        this.updateDisplay();
        return;
      } else if (this.rValue != '0') {
        this.rValue = this.rValue.substring(0, this.rValue.length - 1);
        this.rValue = this.rValue == '' ? '0' : this.rValue;
        this.updateDisplay();
        return;
      }
    }

    if (input == '=') {
      this.calculate();
      return;
    }
  }

  private updateDisplay() {
    if (!this.op) {
      this.$display.next(this.lValue);
    } else {
      this.$display.next(this.rValue);
    }
  }

  private calculate() {
    let result: number;

    switch (this.op) {
      case '/':
        result = parseFloat(this.lValue) / parseFloat(this.rValue);
        break;
      case '*':
        result = parseFloat(this.lValue) * parseFloat(this.rValue);
        break;
      case '-':
        result = parseFloat(this.lValue) - parseFloat(this.rValue);
        break;
      default:
        result = parseFloat(this.lValue) + parseFloat(this.rValue);
    }

    this.lValue = result.toString();
    this.op = undefined;
    this.rValue = '0';

    this.updateDisplay();
  }
}
