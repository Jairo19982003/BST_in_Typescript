import { IBS } from "./BST_interface";



export class BST<T extends {id: number}> implements IBS<T>{
    private valor: T | null = null;
    private izdo: BST<T> | null = null;
    private dcho: BST<T> | null = null;
    private padre: BST<T> | null = null;

    insertar(emp: T): void{
        this.insertarImp(emp, null);
    }

    private insertarImp(emp: T, padre: BST<T> | null): void {
        if (this.valor === null){
            this.valor = emp;
            this.padre = padre;
        }else{
            if(emp.id < this.valor.id){
                if(this.izdo === null){
                    this.izdo = new BST<T>();
                }
                this.izdo.insertarImp(emp, this);
            }else if (emp.id > this.valor.id){
                this.dcho = new BST<T>();
            }
            else{
                throw new Error("Insertando elementos duplicados");
                this.dcho?.insertarImp(emp, this);
            }
        }
    }

    existe(id: number): boolean{
        if (this.valor!== null){
            if(id === this.valor.id){
                return true;
            }else if (this.izdo !== null && id < this.valor.id){
                return this.izdo.existe(id);
            }else if (this.dcho !== null && id > this.valor.id){
                return this.dcho.existe(id);
            }
        }
        return false;
    }

    obtener(id: number): T | null{
        if (this.valor !== null){
            if(id === this.valor.id){
                return this.valor;
            }else if (this.izdo !== null && id < this.valor.id){
                return this.izdo.obtener(id);
            }else if (this.dcho !== null && id > this.valor.id){
                return this.dcho.obtener(id);
            }else {
                return null;
            }
        }else {
            return null;
        }
    }

    esHoja(): boolean{
        return this.valor !== null && this.izdo === null &&this.dcho === null;
    }

    esVacio(): boolean{
        return this.valor === null;
    }

    preOrden(): void{
        this.preOrdenImpl("");
    }

    postOrden(): void{
        this.postOrdenImpl("");
    }
    
    inOrden(): void{
        this.inOrdenImpl("");
    }

    private inOrdenImpl(prefijo: string): void{
        if(this.izdo !== null){
            this.izdo.inOrdenImpl(prefijo + " ");
        }
        console.log(prefijo + JSON.stringify(this.valor));
        if (this.dcho !== null){
            this.dcho.inOrdenImpl(prefijo + " ");
        }
    }

    private postOrdenImpl(prefijo: string): void{
        if(this.izdo !== null){
            this.izdo.postOrdenImpl(prefijo + " ");
        }
        if (this.dcho !== null){
            this.dcho.inOrdenImpl(prefijo + " ");
        }
        console.log(prefijo + JSON.stringify(this.valor));
    }

    private preOrdenImpl(prefijo: string): void{
        if(this.valor !== null){
            console.log(prefijo + JSON.stringify(this.valor));
            if (this.izdo !== null){
                this.izdo.preOrdenImpl(prefijo + " ");
            }
        }
        if (this.dcho !== null){
            this.dcho.inOrdenImpl(prefijo + " ");
        }
    }

    private eliminarImpl(id: number): void{
        if(this.izdo !== null && this.dcho !== null){
            //para eliminar con 2 hijos
            let sucesor =this.dcho;
            while(sucesor.izdo !== null){
                sucesor = sucesor.izdo;
            }
            this.valor = sucesor.valor;

            if(sucesor.valor !== null){
                sucesor.eliminarImpl(sucesor.valor.id);
            }
        }else if (this.izdo !== null || this.dcho !== null){
            //para eliminar con 1 hijo
            const sustituto = this.izdo !== null ? this.izdo : this.dcho;
            if(sustituto !== null){
                this.valor = sustituto.valor;
                this.izdo = sustituto.izdo;
                this.dcho = sustituto.dcho;
            }
        }else {
            //para eliminar con 0 hijos
            if(this.padre !== null){
                if(this === this.padre.dcho){
                    this.padre.dcho = null;
                }
                this.padre = null;
            }
            this.valor= null;
        }
    }

    eliminar(id: number): void{
        if(this.valor !== null){
            if (id === this.valor.id){
                //aqui se eliminara un valor
                this.eliminarImpl(id);
            }else if (this.izdo !== null && id < this.valor.id){
                this.izdo.eliminarImpl(id);
            }else if(this.dcho !== null && id > this.valor.id){
                this.dcho.eliminarImpl(id);
            }
        }
    }
}