import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDecorComponent } from './calc-decor.component';

describe('CalcDecorComponent', () => {
  let component: CalcDecorComponent;
  let fixture: ComponentFixture<CalcDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcDecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
