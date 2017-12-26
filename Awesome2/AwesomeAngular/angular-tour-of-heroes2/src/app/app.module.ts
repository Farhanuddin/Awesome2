import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

/* Modules imported  */
import { FormsModule }  from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/* Importing Heroe Services */

import {HeroService} from './hero.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService ], //MessageService 
  bootstrap: [AppComponent]
})
export class AppModule { }
