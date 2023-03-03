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

}
