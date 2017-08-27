import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {


  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }
  
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
