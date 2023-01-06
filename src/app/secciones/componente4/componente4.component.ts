import { Component, Input, OnInit } from '@angular/core';
import { datos } from '../componente3/tarea-list';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  @Input() datos: datos[] = [];

  Eliminar(indice:number){
    this.datos.splice(indice, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}