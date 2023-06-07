import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-calc-display',
  templateUrl: './calc-display.component.html',
  styleUrls: ['./calc-display.component.css']
})
export class CalcDisplayComponent implements OnInit, OnDestroy {

  displayContent: string = "";

  private calcServiceSub: Subscription | undefined;

  constructor(private calcService: CalculatorService) { }

  ngOnInit(): void {
    this.calcServiceSub = this.calcService.$display.subscribe((data) => {
      this.displayContent = data;
    });

  }

  ngOnDestroy(): void {
      if (this.calcServiceSub) {
        this.calcServiceSub.unsubscribe();
      }
  }

}
