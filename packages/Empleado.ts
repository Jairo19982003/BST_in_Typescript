interface Comparable<T> {
    compareTo(other: T): number;
}

export class Empleado implements Comparable<Empleado>{
    id: number;
    nombre: string;
    puesto: string;
    despacho: string;

    constructor(id: number, nombre: string, puesto: string, despacho: string){
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.despacho = despacho;
    }

    compareTo(emp: Empleado): number {
        if (this.id === emp.id){
            return 0;
        }else if (this.id < emp.id){
            return -1;
        }else{
            return 1;
        }
    }
}