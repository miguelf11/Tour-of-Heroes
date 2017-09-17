import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from './../hero.service'; 

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

}
