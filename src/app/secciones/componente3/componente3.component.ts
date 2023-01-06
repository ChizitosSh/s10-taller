import { Component, OnInit } from '@angular/core';
import { datos } from './tarea-list';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  datos: datos[] = []

  tarea!: string;
  descripcion!: string;
  resultado: boolean = false;
  mensaje!: string;

  AgregarTarea(){
    if(this.tarea && this.descripcion) {
      let agregarDatos: datos = {
        tarea: this.tarea,
        descripcion: this.descripcion,
      }
      this.datos.push(agregarDatos);
      this.tarea = "";
      this.descripcion = "";
      this.resultado = true;
      this.mensaje="";
    } else {
      this.resultado = false;
      this.mensaje="Por favor, rellene los campos";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
