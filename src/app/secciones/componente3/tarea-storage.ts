import { Injectable } from "@angular/core";
import { datos } from "./tarea-list";

@Injectable({
    providedIn: 'root'
})

export class tareaStorage {
    CLAVE_LOCAL_STORAGE = 'Tarea'

    constructor() {}

    getTareaStorage(): datos[] {
        return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '[]')
    }

    setTareaStorage(tareas_storage: datos[]) {
        localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas_storage))
    }
}