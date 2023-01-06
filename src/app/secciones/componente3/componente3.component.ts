import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
    //crear el array de datos -> Almacena información
datos = new Array;

//los datos para el array
tarea = "";
txttarea = "";

//Metodo para añadir valores al Array
AgregarTarea(){
  this.datos.push({'Tarea': this.tarea, 'TxtTarea':this.txttarea});
  console.log(this.datos);
}

constructor() { }

  ngOnInit(): void {
  }

}
