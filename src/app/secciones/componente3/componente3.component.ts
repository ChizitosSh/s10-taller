import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  datos = new Array;

  nombre = '';
  apellido = '';

  Agregar(){
    if(this.nombre!=''){
      this.datos.push({'Nombre': this.nombre, 'Apellidos': this.apellido})
    } else {
      console.log('Debe ingresar un nombre');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
