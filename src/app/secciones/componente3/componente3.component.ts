import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
datos = new Array;

tarea = "";
descripcion = "";

AgregarTarea(){
  this.datos.push({'Tarea': this.tarea, 'Descripcion':this.descripcion});
  console.log(this.datos);
}

constructor() { }

  ngOnInit(): void {
  }

}
