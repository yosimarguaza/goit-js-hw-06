
const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
  
   
  }) 




// const fontSizeControl = document.getElementById("font-size-control");
// const textSpan = document.getElementById("text");

// fontSizeControl.addEventListener("input", () => {
//   const fontSize = fontSizeControl.value + "px";
//   textSpan.style.fontSize = fontSize;
// });