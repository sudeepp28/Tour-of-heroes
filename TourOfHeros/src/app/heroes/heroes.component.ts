import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes= HEROES;
  selectedHero: Hero=  { id: 12, name: 'Dr. Nice' };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log("this.selectedHero",this.selectedHero,"hero-->",hero);
  }
  
}
