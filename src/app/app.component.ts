import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  availableHeros: Hero[];

  selectedHeros: Hero[];

    draggedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.selectedHeros = [];
        this.availableHeros= this.heroService.getHeroes();
    }

    dragStart(event,hero: Hero) {
        this.draggedHero = hero;
        console.log('its working '+ this.draggedHero.name);
    }

    drop(event) {
      console.log(event);
        if(this.draggedHero) {
            let draggedHeroIndex = this.findIndex(this.draggedHero);
            this.selectedHeros = [...this.selectedHeros, this.draggedHero];
            this.availableHeros = this.availableHeros.filter((val,i) => i!=draggedHeroIndex);
            this.draggedHero = null;
        }
    }

    dragEnd(event) {
        this.draggedHero = null;
    }

    findIndex(hero: Hero) {
        let index = -1;
        for(let i = 0; i < this.availableHeros.length; i++) {
            if(hero.id === this.availableHeros[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
