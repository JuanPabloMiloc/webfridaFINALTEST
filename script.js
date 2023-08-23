
let carrito = "";
let nuevoOperacion = false;

let talle = prompt("Para saber la duración de su alimento, ingrese el tamaño de su perro (PEQ, MED, GDE, GIG):");
let cantidad = parseInt(prompt(`Ingrese la presentación para raza ${talle} en kg, de la ración que desea comprar:`));

function hacerCarrito(talle, cantidad) {
  do {
    seleccionartalle(talle, cantidad);
    nuevoOperacion = confirm("¿Desea consultar por otros tamaños? de lo contrario presione CANCELAR");
    if (nuevoOperacion) {
      talle = prompt("Ingrese el tamaño de su perro (PEQ, MED, GDE, GIG):");
      cantidad = parseInt(prompt(`Ingrese la presentación para raza ${talle} en kg, de la ración que desea comprar:`));
    }
  } while (nuevoOperacion);

  console.log("Para el tamaño de su mascota, la ración seleccionada debería durar:");
  console.log(carrito);
}



function seleccionartalle(talle, cantidad) {
  switch (talle.toLowerCase()) 
    
  {
    case "peq":
      carrito += `Presentación de ${cantidad} kg, razas Pequeñas: ${(cantidad / 0.2).toFixed(0)} días\n`;
      break;
    case "med":
      carrito += `Presentación de ${cantidad} kg, razas medianas: ${(cantidad / 0.5).toFixed(0)} días\n`;
      break;
    case "gde":
      carrito += `Presentación de ${cantidad} kg, razas grandes: ${(cantidad / 0.65).toFixed(0)} días\n`;
      break;
    case "gig":
      carrito += `Presentación de ${cantidad} kg, razas gigantes: ${(cantidad / 0.8).toFixed (0)} días\n`;
      break;
    default:
      alert("El tamaño ingresado no está disponible.");
      break;
      
  }
}



hacerCarrito(talle, cantidad);

Swal.fire({
  title: 'Gracias',
  text: 'Le informaremos sobre sus inquietudes por correo.',
  icon: 'Gracias por su consulta!',
  confirmButtonText: 'Aceptar'
  })