import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {
  
  heroe:any = {};

  constructor() { }

  ngOnInit() {
  }

}
