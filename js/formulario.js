

  // Get the select button and the image element
var select = document.getElementById("incidencia");
var img = document.getElementById("changeimg");

// Add an event listener to the select button that listens for a change
select.addEventListener("change", function() {
  // Get the value of the selected option
  var selectedOption = this.value;

  // Change the source of the image based on the selected option
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

function showDescription() {
  var description = document.getElementById("description");
  description.style.display = "block";
}

















