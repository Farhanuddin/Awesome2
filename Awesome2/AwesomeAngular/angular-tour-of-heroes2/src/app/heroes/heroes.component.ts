import { Component, OnInit } from '@angular/core';
//Imporitng heroes object so we can use it as a data type in this program.
import { Hero } from '../hero';

//Importing mock hero data service
import {HEROES} from '../mock-heroes';

//Importing heroes data service
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //calling hero service to get all heroes
    this.getHeroes();
  }

  //SelectedHero variale holder for storing clicked hero object details
  selectedHero:Hero;

  //defining variable for heries which we are getting from service.
  heroes: Hero[];

  //onSelect Method on which Hero object datatype is being passed.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //function to retrive heroes from the service - synchrounous function
  getHeroes() : void {
     this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }
}
