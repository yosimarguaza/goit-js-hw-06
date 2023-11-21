
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


  const changeColorButton = document.querySelector('.change-color').addEventListener('click', function () {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    const colorBody = document.querySelector(".color");
    colorBody.textContent = color;
  });

  // changeColorButton.addEventListener('click', () {
  //   const color = getRandomHexColor();
  //   changeColorButton.body.style.backgroundColor = color;
  //   colorBody.textContent = color;

  // });




