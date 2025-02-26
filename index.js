import { mostrarMenu } from "./componentes/header/header.js";  
import { cargarProductos } from "./componentes/catalogo/catalogo.js";

function iniciarApp(){
    let DOM = document.querySelector("#root");

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let div_header = document.createElement("div");
    div_header.className = "div_header";
    div_header.appendChild(mostrarMenu());  
    contenedor.appendChild(div_header);

    let contenedorProductos = document.createElement('div');
    contenedorProductos.className = "contenedor-productos";  
    contenedor.appendChild(contenedorProductos);

    DOM.appendChild(contenedor);

    cargarProductos(contenedorProductos);
}

iniciarApp();
