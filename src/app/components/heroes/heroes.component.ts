import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor( private _heroesServices:HeroesService ) {


  }

  ngOnInit() {
  }

}
