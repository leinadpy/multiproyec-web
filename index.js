document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Aquí puedes agregar tu lógica de validación de campos
    // Por simplicidad, aquí solo se verifica que los campos no estén vacíos
    if (name && email && phone && message) {
      document.getElementById("success-message").classList.remove("hidden");
      // Aquí puedes agregar el código para enviar el formulario, como una solicitud AJAX
      // Por simplicidad, aquí simplemente se muestra un mensaje de éxito
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
