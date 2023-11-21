

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsId = document.querySelector("#ingredients");

const ingredientesArray = ingredients.map(element => {

const ingredientsLi = document.createElement('li');
ingredientsLi.classList.add('item');
ingredientsLi.textContent = element;
return ingredientsLi;
});
ingredientsId.append(...ingredientesArray)
