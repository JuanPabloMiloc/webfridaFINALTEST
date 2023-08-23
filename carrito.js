let productos = [
    {
      id: 1,
      nombreProducto: "NUTRIQUE GATO ADULTO",
      descripcion: "Líne Healthy Maintence, para un crecimiento ideal",
      precio: 3500,
      imagen: "../assets/productoscarrito/nutriquegato.png"
    },
  
    {
      id: 2,
      nombreProducto: "NUTRIQUE PERRO ADULTO",
      descripcion: "El alimento perfecto para que tu pero viva a pleno",
      precio: 3800,
      imagen: "../assets/productoscarrito/nutriqueperro.png"
    },
  
    {
      id: 3,
      nombreProducto: "BALANCED GATO ADULTO",
      descripcion: "El balance perfecto para un desarrollo equilibrado",
      precio: 3000,
      imagen: "../assets/productoscarrito/balancedgato.png"
    },
  
    {
      id: 4,
      nombreProducto: "BALANCED PERRO ADULTO",
      descripcion: "El balance perfecto para un desarrollo equilibrado",
      precio: 2950,
      imagen: "../assets/productoscarrito/balancedperro.png"
    },
  
    {
      id: 5,
      nombreProducto: "COMPLETE GATO",
      descripcion: "Es bueno, completamente excepcional",
      precio: 2450,
      imagen: "../assets/productoscarrito/completegato.png"
    },
  
    {
      id: 6,
      nombreProducto: "COMPLETE PERRO",
      descripcion: "Es bueno, completamente excepcional",
      precio: 2750,
      imagen: "../assets/productoscarrito/completeperro.png"
    },
    
    {
        id: 7,
        nombreProducto: "COMPLETE PERRO",
        descripcion: "Es bueno, completamente excepcional",
        precio: 2750,
        imagen: "../assets/productoscarrito/completeperro.png"
      },

      {
        id: 8,
        nombreProducto: "COMPLETE PERRO",
        descripcion: "Es bueno, completamente excepcional",
        precio: 2750,
        imagen: "../assets/productoscarrito/completeperro.png"
      },

      {
        id: 9,
        nombreProducto: "COMPLETE PERRO",
        descripcion: "Es bueno, completamente excepcional",
        precio: 2750,
        imagen: "../assets/productoscarrito/completeperro.png"
      },

      {
        id: 10,
        nombreProducto: "COMPLETE PERRO",
        descripcion: "Es bueno, completamente excepcional",
        precio: 2750,
        imagen: "../assets/productoscarrito/completeperro.png"
      },

      {
        id: 11,
        nombreProducto: "COMPLETE PERRO",
        descripcion: "Es bueno, completamente excepcional",
        precio: 2750,
        imagen: "../assets/productoscarrito/completeperro.png"
      },

      {
        id: 12,
        nombreProducto: "COMPLETE PERRO",
        descripcion: "Es bueno, completamente excepcional",
        precio: 2750,
        imagen: "../assets/productoscarrito/completeperro.png"
      }

      ]


      document.addEventListener('click', function(event) {
        console.log('Se hizo clic en:', event.target);
      });



  var productCards = document.getElementById("product-cards");

  for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];

    var cardHTML = `
      <div class="col-md-2 mb-2">
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
          <div class="card-body">
            <h5 class="card-title">${producto.descripcion}</h5>
            <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
            <input type="number" class="form-control mb-2" placeholder="Cantidad" value="${producto.cantidad}">
            <button class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `
    
    ;

    productCards.innerHTML += cardHTML;

  
  }

