const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', validarinput)

function validarinput(){
  let conteo = this.value.length;
  let cantidadaSimbolo = this.dataset.length;

  if(conteo == cantidadaSimbolo){
    inputElement.setAttribute('class', 'valid');
  }else{
    inputElement.setAttribute('class', 'invalid');
  }
  console.log(conteo);
}


