document.addEventListener('DOMContentLoaded', function() { 
   const popup = document.getElementById('popup');
   const btnAceptar = document.getElementById('btnAceptar');
   const formulario = document.getElementById('formularioParticipacion');
   const nombreSpan = document.getElementById('nombreIngresado');
   const emailSpan = document.getElementById('emailIngresado');

   // Mostrar el popup al enviar el formulario
   formulario.addEventListener('submit', function(event) {
       event.preventDefault(); // Evita que se envíe el formulario

       // Obtener los valores ingresados
       const nombre = document.getElementById('nombre').value;
       const email = document.getElementById('email').value;

       // Insertar los valores en el popup
       nombreSpan.textContent = nombre;
       emailSpan.textContent = email;

       // Mostrar el popup
       popup.classList.add('show');
   });

   // Cerrar el popup al hacer clic en el botón "Aceptar"
   btnAceptar.addEventListener('click', function() {
       popup.classList.remove('show');
       formulario.reset(); // Opcional: limpiar formulario luego del popup
   });
});
