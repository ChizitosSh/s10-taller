export class datos {
    public tarea: string;
    public descripcion: string;
    public terminado: boolean;

    constructor(tarea: string, descripcion: string, terminado?: boolean) {
        this.tarea = tarea;
        this.descripcion = descripcion;
        // Si terminado tiene un valor, asignale ese valor, caso contrario asignale el valor de false
        this.terminado = terminado ? terminado : false;
    }
}