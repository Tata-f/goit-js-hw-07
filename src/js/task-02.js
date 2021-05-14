const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
const ingredientsEl = document.querySelector('#ingredients')


const elements = ingredients.map(element => {
const liEl = document.createElement('li');
liEl.textContent = element;
return liEl;

});

ingredientsEl.append(...elements)
console.log(elements)
