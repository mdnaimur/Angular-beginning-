import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  // heroes = HEROES;

  // hero: Hero ={
  //  id: 1,
  //  name: 'Windstrom'
  // };

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessagesService) {}

  getHeroes(): void {
   // this.heroes = this.heroService.getHeroes();
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    
  }

  ngOnInit(){
    this.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
