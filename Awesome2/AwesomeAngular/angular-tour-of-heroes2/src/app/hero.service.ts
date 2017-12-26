import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/*For Asynchronous call to data we are importing these libraries */
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  //get heroes data from mock heroes in this service
  getHeroes(): Observable<Hero[]> {
  	return of(HEROES);
  }

}
