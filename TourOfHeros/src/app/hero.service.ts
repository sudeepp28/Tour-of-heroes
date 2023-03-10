import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessagesService } from './messages.service';
@Injectable({ //Dependency Injection
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessagesService) { }

  // getHeroes(2): Hero[] {
  //   return HEROES;
  // }

  getHeroes():Observable<Hero[]>{
    const heroes=of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes; //returning Observable<Hero[]>

  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
