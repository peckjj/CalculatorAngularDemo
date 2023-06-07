import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessPokemonComponent } from './guess-pokemon.component';

describe('GuessPokemonComponent', () => {
  let component: GuessPokemonComponent;
  let fixture: ComponentFixture<GuessPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
