import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-sprite',
  templateUrl: './pokemon-sprite.component.html',
  styleUrls: ['./pokemon-sprite.component.css']
})
export class PokemonSpriteComponent implements OnInit, OnDestroy {

  source: string = '';

  private pokemonServiceSub: Subscription | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonServiceSub = this.pokemonService.$image.subscribe((source) => {
      this.source = source;
    });
  }

  ngOnDestroy(): void {
    if (this.pokemonServiceSub) {
      this.pokemonServiceSub.unsubscribe();
    }
  }

}
