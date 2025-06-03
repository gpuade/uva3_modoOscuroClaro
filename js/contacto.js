$(document).ready(function () {

}
);

function esEmailValido(correo) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}




$("#formContacto").on('submit',
  function (event) {
    event.preventDefault();
    let nombre = $("#inputNombre").val();
    let email = $("#inputMail").val();
    let asunto = $("#inputAsunto").val().length;

    let validacionCompleta = true;

    if (nombre.length <= 0) {
      validacionCompleta = false;
      document.getElementById("mjValNombre").innerText = "Por favor, ingrese un nombre";
      $("#mjValNombre").css('display', 'block');
    } else {
      $("#mjValNombre").css('display', 'none');
    }

    if (!(esEmailValido(email))) {

      validacionCompleta = false;
      document.getElementById("mjValEmail").innerText = "Correo electrónico inválido";
      $("#mjValEmail").css('display', 'block');
    } else {
      $("#mjValEmail").css('display', 'none');
    }

    if (asunto <= 0) {
      validacionCompleta = false;
      $("#mjValAsunto").css('display', 'block');
      document.getElementById("mjValAsunto").innerText = "Por favor, ingrese un asunto";
    } else {
      $("#mjValAsunto").css('display', 'none');
    }

    if (validacionCompleta) {
      document.getElementById("formContacto").reset();
      $("#mjValNombre").css('display', 'none');
      $("#mjValEmail").css('display', 'none');
      $("#mjValAsunto").css('display', 'none');
      alert("Gracias por su contacto" + " " + nombre + "." + "A la brevedad le estaré respondiendo.");
    }

  }
);



