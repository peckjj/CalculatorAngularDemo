import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guess-pokemon',
  templateUrl: './guess-pokemon.component.html',
  styleUrls: ['./guess-pokemon.component.css']
})
export class GuessPokemonComponent implements OnInit, OnDestroy {

  source = '';
  guess = '';
  statusText = "Who's that Pokemon?";


  private name = '';

  private sub: Subscription | undefined;
  private waitingForNext = false;

  private button: HTMLElement | null = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.sub = this.pokemonService.$image.subscribe((data) => {
      this.statusText = "Who's that Pokemon?";
      this.source = data.url;
      this.name = data.name;
      document.getElementById('image')?.classList.remove('revealed');
      if (this.button) {
        this.button.innerText = 'Enter';
      }
      this.waitingForNext = false;
    });
    this.button = document.getElementById('enter');
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  check() {
    if (this.waitingForNext || !this.button) {
      return;
    }

    const image = document.getElementById('image');

    if (this.guess.toLowerCase() == this.name.toLowerCase() || this.guess == 'cheat') {
      this.button.innerText = 'Correct!';

      this.statusText = `It's ${this.name}!`;

      image?.classList.toggle('revealed');

      this.waitingForNext = true;

      setTimeout(() => {
        this.pokemonService.getNewImage();
      }, 3000);
    } else {
      this.button.innerText = 'Try again!';
    }

  }

}
