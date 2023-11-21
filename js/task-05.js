const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function(){  //'change', (e) => {}
    //nameInput.textContent = e.target.value;
 

  // Verifica si el campo de entrada está vacío
  if (nameInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput;
  }
});
