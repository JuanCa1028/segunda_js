let productos = [
    { id: 1, nombre: "Camiseta", precio: 20, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 35, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 50, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 15, categoria: "Accesorios" }
];

const listaProductos = document.getElementById("lista-productos");
const buscarInput = document.getElementById("buscar");
const filtrarBtn = document.getElementById("filtrar-btn");

function mostrarProductos(lista) {
    listaProductos.innerHTML = "";
    lista.forEach(producto => {
        listaProductos.innerHTML += `
            <div>
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
            </div>
        `;
    });
}

function filtrarProductos() {
    const busqueda = buscarInput.value.toLowerCase();
    const resultado = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda)
    );
    mostrarProductos(resultado);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
});

filtrarBtn.addEventListener("click", filtrarProductos);
