import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.css']
})
export class CalcButtonComponent implements OnInit {

  @Input() val: string = '';
  @Input() bgColor: string = 'black';
  @Input() textColor: string = 'white';

  constructor(private calcService: CalculatorService) { }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.calcService.addInput(this.val);
  }

}
