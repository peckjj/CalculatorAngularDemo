import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcDisplayComponent } from './calculator/calc-display/calc-display.component';
import { CalcKeypadComponent } from './calculator/calc-keypad/calc-keypad.component';
import { CalcButtonComponent } from './calculator/calc-keypad/calc-button/calc-button.component';
import { CalcDecorComponent } from './calculator/calc-decor/calc-decor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSpriteComponent } from './pokemon-sprite/pokemon-sprite.component';
import { GuessPokemonComponent } from './guess-pokemon/guess-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CalculatorComponent,
    CalcDisplayComponent,
    CalcKeypadComponent,
    CalcButtonComponent,
    CalcDecorComponent,
    PokemonSpriteComponent,
    GuessPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
