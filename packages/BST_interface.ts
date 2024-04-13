
export interface IBS<T extends {id: number}>{
    insertar(emp: T): void;
    existe(id: number): boolean;
    obtener(id: number): T | null;
    esHoja(): boolean;
    esVacio(): boolean;
    preOrden(): void;
    inOrden(): void;
    postOrden(): void;
    eliminar(id: number): void;
}