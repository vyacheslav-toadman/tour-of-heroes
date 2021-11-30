import { Component } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;


  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
