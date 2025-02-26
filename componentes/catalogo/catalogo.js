import { producto } from "./itemProducto.js";
import { dataProductos } from "./data.js"; 

function cargarProductos(contenedor) {
    if (!contenedor) return; 

    contenedor.innerHTML = "";  

    dataProductos.forEach((tarea) => {
        const productoElemento = producto(tarea); 
        contenedor.appendChild(productoElemento); 
    });
}

export { cargarProductos };
