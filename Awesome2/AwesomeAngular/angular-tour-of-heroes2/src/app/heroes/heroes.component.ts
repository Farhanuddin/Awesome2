import { Component, OnInit } from '@angular/core';
//Imporitng heroes object so we can use it as a data type in this program.
import { Hero } from '../hero';

//Importing mock hero data service
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //SelectedHero variale holder for storing clicked hero object details
  selectedHero:Hero;

  heroes = HEROES;

  //onSelect Method on which Hero object datatype is being passed.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
