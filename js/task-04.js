let counterValue = 0;

  // Paso 2: Obtener referencias a los elementos del DOM.
  const valueElement = document.getElementById('value');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');

  // Paso 3: ha             
  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
  });

  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
  });