import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'NgCalcDemo';

  private sub: Subscription | undefined;

  constructor(private pokemonService: PokemonService) {
    this.sub = pokemonService.$image.subscribe(() => {
      const image = document.getElementById('sprite');
      image?.classList.toggle('hidden');
      setTimeout(() => {
        image?.classList.toggle('hidden');
      }, 1500);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }
}
