import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/*For Asynchronous call to data we are importing these libraries */
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  //get heroes data from mock heroes in this service
  getHeroes(): Observable<Hero[]> {
	  // Todo: send the message _after_ fetching the heroes
	  this.messageService.add('HeroService: fetched heroes');
	  return of(HEROES);
  }

}
