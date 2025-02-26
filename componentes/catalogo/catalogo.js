import { producto } from "./itemProducto.js";
import { dataProductos } from "./data.js";
import { eliminarProducto, resaltarProducto, actualizarContador } from "./funcionesProductos.js";

function cargarProductos(contenedor) {
    if (!contenedor) return;

    contenedor.innerHTML = "";

    dataProductos.forEach((tarea) => {
        const productoElemento = producto(tarea);

        // Agregar evento para resaltar el producto
        productoElemento.addEventListener("click", () => resaltarProducto(productoElemento));

        // Agregar evento al botón de eliminar
        const botonEliminar = productoElemento.querySelector(".div_add");
        if (botonEliminar) {
            botonEliminar.addEventListener("click", (event) => {
                eliminarProducto(event);
                actualizarContador(); // Llamar al contador cuando se elimine
            });
        }

        contenedor.appendChild(productoElemento);
    });
}

export { cargarProductos };
