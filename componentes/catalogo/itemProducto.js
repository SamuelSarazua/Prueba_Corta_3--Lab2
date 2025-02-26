import { resaltarProducto, eliminarProducto } from "./funcionesProductos.js";

function producto(tarea) {
    let div_prin = document.createElement('div');
    div_prin.className = "div_prin";

    let imagen = document.createElement('img');
    imagen.src = "https://cdn11.bigcommerce.com/s-iys49mn3fh/images/stencil/1280x1280/products/271258/2062315/123191__17029.1720443056.jpg?c=1";  
    imagen.alt = "Imagen del producto";
    div_prin.appendChild(imagen);

    let titulo = document.createElement('h2');
    titulo.textContent = tarea.nombre;
    div_prin.appendChild(titulo);

    
    let precioContainer = document.createElement('div');
    precioContainer.className = "precio-container";

    let precio = document.createElement('h1');
    precio.textContent = `Q ${tarea.precio}`;
    precioContainer.appendChild(precio);

    let div_Eli = document.createElement('div');
    div_Eli.className = "div_add";
    div_Eli.innerText = "Eliminar";

    
    div_Eli.addEventListener("click", (event) => eliminarProducto(event));

    precioContainer.appendChild(div_Eli);
    div_prin.appendChild(precioContainer);


    div_prin.addEventListener("click", () => resaltarProducto(div_prin));

    return div_prin;
}

export { producto };
