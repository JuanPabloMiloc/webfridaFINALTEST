class Producto {
    constructor(id, nombreProducto, precio) {
      this.id = id;
      this.nombreProducto = nombreProducto;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [
        new Producto(1, "NUTRIQUE", 3200),
        new Producto(2, "BALANCED", 2900),
        new Producto(3, "COMPLETE", 2500),
        new Producto(4, "PREMIUM", 2000),
        new Producto(5, "HOP", 1800),
        new Producto(6, "BELCAN", 1450)
      ];
      this.items = [];
    }
  
    buscarProducto(nombreProducto) {
      return this.productos.find((producto) =>
        producto.nombreProducto.toLowerCase() === nombreProducto.toLowerCase()
      );
    }
  
    agregarItem(producto, cantidad) {
      this.items.push({
        producto: producto.nombreProducto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
      });
    }
  
    confirmarCarrito() {
      while (true) {
        let seleccion = prompt(
          "Para simular el costo de su compra, ingrese el nombre del producto que desea: (NUTRIQUE, BALANCED, COMPLETE, PREMIUM, HOP, BELCAN)"
        );
  
        let producto = this.buscarProducto(seleccion);
  
        if (producto) {
          let cantidad = parseInt(prompt("Ingrese la cantidad de bolsas (3kg) que desea comprar:"));
          this.agregarItem(producto, cantidad);
        } else {
          alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
        }
  
        if (!confirm("¿Desea agregar otro producto al carrito? De lo contrario seleccione CANCELAR")) {
          break;
        }
      }
    }
  
    calcularTotal() {
      console.log("Carrito de compras:");
      this.items.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
      });
  
      let total = this.items.reduce((sum, item) => sum + item.subtotal, 0);
      console.log(`Total a pagar: ${total}`);
    }
  
    vaciarCarrito() {
      this.items = [];
      console.log("El carrito ha sido vaciado.");
    }
  }
  
  const carrito = new Carrito();
  carrito.confirmarCarrito();
  
   if (carrito.items.length > 0) {
    if (confirm("Si culmino su compra indique CANCELAR")) {
      carrito.vaciarCarrito();
    }
  }
  
  carrito.calcularTotal();
  

