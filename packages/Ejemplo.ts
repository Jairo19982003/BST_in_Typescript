import {Empleado} from "./Empleado";
import {BST} from "./BST";

class Ejemplo{

    e1 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e2 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e3 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e4 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e5 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e6 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e7 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    e8 = new Empleado(43, "Walter Cordova", "IT", "A-255");
    
    bst = new BST<Empleado>();
    
    //Console.log("Esta vacio: " + BST.esVacio() + "y es hoja" + BST.esHoja());

     localizar(bst: BST<Empleado>, employee: Empleado): Empleado{
        
        if (bst.existe(employee.id)){
            console.log("Obtener " + employee.id + ": " + JSON.stringify(bst.obtener(employee.id)));
            return employee;
        }else{
            console.log("No existe " + employee.id);
            return employee;
        }
    }
}