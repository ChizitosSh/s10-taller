import { Component, Input, OnInit } from '@angular/core';
import { datos } from '../componente3/tarea-list';
import { tareaStorage } from '../componente3/tarea-storage';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  constructor(private tareaStorage: tareaStorage) {};

  @Input() datos: datos[] = [];

  Terminado(indice:number){
    console.log(this.datos[indice].tarea)
  }

  Eliminar(indice:number){
    this.datos.splice(indice, 1);
    this.tareaStorage.setTareaStorage(this.datos);
  }

  ngOnInit(): void {
  }

}