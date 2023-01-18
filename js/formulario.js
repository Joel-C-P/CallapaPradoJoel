
  // Cojo el id del botón "select" y del elemento imagen
var select = document.getElementById("incidencia");
var img = document.getElementById("changeimg");

// Ahora tengo que agregar un detector de eventos al botón "select" que escucha un cambio
select.addEventListener("change", function() {
  // Obtengo el valor del botón "select" 
  var selectedOption = this.value;

  // Cambio la fuente de la imagen según la opción seleccionada con condicionales
  if (selectedOption === "0") {
    img.src = "./img/opcion.jpg";
  } else if (selectedOption === "distribucion") {
    img.src = "./img/distribucion.jpg" ;
  } else if (selectedOption === "produccion") {
    img.src = "./img/produccion.jpg";
  } else if (selectedOption === "oficina") {
    img.src = "./img/oficiona.jpg";
  }

});

// Ahora creo una funcion para mostrar la descripcion y claro, llamo al boton "Mostras Descripcion" con su id
function showDescription() {
  var description = document.getElementById("description");
  description.style.display = "block";
}



/* Ahora llego el momento de preparar la validacion, por lo cual 
creo una funcion en la cual llamo al input de "Numero de serie" y al texto de  ""*/
function validateSerialNumber() {
  var serialNumber = document.getElementById("serialNumber").value;
  var errorMessage = document.getElementById("errorMessage");
  var borderRed = "1px solid red";

  // Validar el formato del número de serie
  var pattern = /^\d{3}[A-Z]{4}(1|2|A)$/;
  if (!pattern.test(serialNumber)) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "El número de serie es inválido";
    document.getElementById("serialNumber").style.border = borderRed;
    return false;
  } else {
    errorMessage.style.display = "none";
    document.getElementById("serialNumber").style.border = "none";
    return true;
  }
}

function removeError() {
  var errorMessage = document.getElementById("errorMessage");
  errorMessage.style.display = "none";
  document.getElementById("serialNumber").style.border = "none";
}

//Ahora preparo con una funcion que llamara a otra que cree anteriormente para que
function submitData() {
  var isValid = validateSerialNumber();
  if (!isValid) {
    return;
  }

  // Aquí iría el código para enviar los datos a algún destino, si es que lo hubiera
}