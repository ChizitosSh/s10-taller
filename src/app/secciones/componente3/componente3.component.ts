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
resultado = false;
mensaje = '';

AgregarTarea(){
  if(this.tarea!='' &&this.descripcion!=''){
    this.datos.push({'Tarea': this.tarea, 'Descripcion':this.descripcion});
    this.tarea = "";
    this.descripcion = "";
    this.resultado = true;
    this.mensaje="";
  }else{
    this.resultado = false;
    this.mensaje="Ingresa los campos, para agregar a la lista";
 }
}


Eliminar(indice:number){
  this.datos.splice(indice, 1)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
