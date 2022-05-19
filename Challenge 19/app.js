let carrito = [];

function agregarProducto() {
  let producto = prompt("Agrega un producto: ");
  producto.trim();
  if (producto === "") {
    producto = prompt(
      "No dejes espacios vacíos. Por favor, ingresa un producto: "
    );
    carrito.push(producto);
  } else {
    carrito.push(producto);
  }
}

function verCarrito() {
  alert(`Tu carrito: \n-${carrito}`);
}

function buscarEnCarrito() {
  let buscar = prompt("¿Que producto busca?");
  let index = carrito.indexOf(buscar);
  if (index >= 0) {
    alert(`Usted ya tiene ${carrito[index]} en su carrito `);
  } else {
    alert("Usted no tiene ese producto.");
  }
}

function filtrarProductos() {
  let arrAux = [];
  let buscar = prompt("¿Que producto quiere filtrar?");
  buscar.trim();
  if (buscar === "") {
    ("Ingrese un producto válido");
  } else {
    carrito.filter((element) => {
      element.includes(buscar);
      arrAux.push(element);
    });
  }

  if (arrAux.length === 0) {
    alert("No se encontro nada.");
  } else {
    alert(`Se ha encontrado ${arrAux.join(" ")}`);
  }
}

function remover() {
  let productoAEliminar = prompt("¿Qué producto quieres eliminar?");
  carrito = carrito.filter((element) => element != productoAEliminar);
  alert(`${productoAEliminar} se ha quitado`);
}
