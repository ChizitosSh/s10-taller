import { Component, OnInit } from '@angular/core';
import { datos } from './tarea-list';
import { tareaStorage } from './tarea-storage';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  constructor(private tareaStorage: tareaStorage) {}

  datos: datos[] = []

  tarea!: string;
  descripcion!: string;
  resultado: boolean = false;
  mensaje!: string;

  AgregarTarea(){
    if(this.tarea && this.descripcion) {
      let datosAgregados = new datos (this.tarea, this.descripcion)
      this.datos.push(datosAgregados);
      this.tareaStorage.setTareaStorage(this.datos);
      // this.obtenerTareas();
      this.tarea = "";
      this.descripcion = "";
      this.resultado = true;
      this.mensaje="";
    } else {
      this.resultado = false;
      this.mensaje="Por favor, rellene los campos";
    }
  }

  getTareaStorage() {
    this.datos = this.tareaStorage.getTareaStorage();
  }

  ngOnInit(): void {
    this.getTareaStorage();
  }

}
