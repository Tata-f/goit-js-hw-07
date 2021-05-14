// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
//  и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const ulEl = document.querySelector('#categories')
console.log(ulEl)

const numOfCategories = ulEl.children.length;
console.log(`В списке ${numOfCategories} категории`);

const liTitle = ulEl.querySelectorAll('h2')
console.log(liTitle)
liTitle.forEach(el => console.log(`Категория: ${el.textContent}`) )

const numOfElements = document.querySelectorAll('.item ul')
console.log(numOfElements)
numOfElements.forEach(el => console.log(` Количество элементов: ${el.children.length}`))



