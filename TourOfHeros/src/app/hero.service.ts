import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable({ //Dependency Injection
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(2): Hero[] {
  //   return HEROES;
  // }

  getHeroes():Observable<Hero[]>{
    const heroes=of(HEROES)
    return heroes; //returning Observable<Hero[]>

  }
}
