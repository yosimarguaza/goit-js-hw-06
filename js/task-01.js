const categoria = document.querySelectorAll('.item');
console.log(`el total de la categoria son ${categoria.length}`);
categoria.forEach(elemento =>{
    console.log(
        `categoria ${elemento.querySelector('h2').textContent}`
    );
    console.log(
        `la cantidad de elementos son ${elemento.querySelectorAll('li').length}`
    );
});