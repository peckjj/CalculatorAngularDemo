import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-keypad',
  templateUrl: './calc-keypad.component.html',
  styleUrls: ['./calc-keypad.component.css']
})
export class CalcKeypadComponent implements OnInit {

  public readonly specialButtonBgColor = 'pink';
  public readonly specialButtonTextColor = 'black';
  public readonly opButtonBgColor = 'red';
  public readonly opButtonTextColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
