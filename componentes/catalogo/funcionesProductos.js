function resaltarProducto(elemento) {
    if (!elemento) return;
    elemento.classList.toggle("seleccionado");
}

function eliminarProducto(event) {
    event.stopPropagation(); 
    const producto = event.target.closest(".div_prin"); 
    if (producto) {
        producto.remove(); 
    }
}

export { resaltarProducto, eliminarProducto };
