// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterEl = document.querySelectorAll("#counter button");
const counterValue = document.querySelector("#value");

const incrementBtn = counterEl[0];
const decrementBtn = counterEl[1];

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);

let counter = 0;

function onIncrementBtnClick() {
  counter -= 1;
  counterValue.textContent = `${counter}`;
}

function onDecrementBtnClick() {
  counter += 1;
  counterValue.textContent = `${counter}`;
}
