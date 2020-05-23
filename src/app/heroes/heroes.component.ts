import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // 如果直接赋值给 this.heroes 会报异常 error TS2740 Type 'Observable<Hero[]>' is missing the following properties from type 'Hero[]': length, pop, push, concat, and 25 more.
    this.heroService.getHeroes()
      .subscribe(res => {
        this.heroes = res;
      })
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
