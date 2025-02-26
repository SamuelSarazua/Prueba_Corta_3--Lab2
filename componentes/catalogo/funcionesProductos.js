import { dataProductos } from "./data.js";

function resaltarProducto(elemento) {
    if (!elemento) return;
    elemento.classList.toggle("seleccionado");
}

function eliminarProducto(event) {
    event.stopPropagation();
    const producto = event.target.closest(".div_prin");

    if (producto) {
        // Buscar el índice del producto en el array `dataProductos`
        const nombreProducto = producto.querySelector("h2").textContent;
        const index = dataProductos.findIndex(p => p.nombre === nombreProducto);
        
        if (index !== -1) {
            dataProductos.splice(index, 1); // Eliminar del array
        }

        producto.remove(); // Eliminar del DOM
    }
}

function actualizarContador() {
    let div_Num = document.querySelector(".div_Num");
    if (div_Num) {
        let numActual = parseInt(div_Num.innerText, 10) || 0;
        div_Num.innerText = Math.max(numActual - 1, 0); // Evita valores negativos
    }
}

export { resaltarProducto, eliminarProducto, actualizarContador };
