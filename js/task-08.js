


const form = document.querySelector('.login-form');
form.addEventListener("submit", event =>{
event.preventDefault();
const datos = {};
for(const elemento of form.elements){
    if (elemento.name) {
       datos[elemento.name] =elemento.value;
    }
}
      if(datos.email && datos.password){
        console.log(datos);
        form.reset();
      }else{
        alert("llene los campos");
      }
});

//       const email = document.querySelector('[name="email"]').value;
//       const password = document.querySelector('[name="password"]').value;


//   function validateForm() {
//     let emailPassword = document.forms["email"]["password"].value;
//     if (emailPassword == "") {
//       alert("Por favor ingresa tu correo electrónico");
//       return false;
//     }
//   }

    // Validar campos (puedes agregar más validaciones según tus necesidades)
//       if (email.trim() === '') {
//         alert('Por favor ingresa tu correo electrónico');
//         return;
//       }

//       if (password.trim() === '') {
//         alert('Por favor ingresa tu contraseña');
//         return;
//       }

//       // Si todo está bien, puedes enviar el formulario
//       form.submit();
//     });
//   });