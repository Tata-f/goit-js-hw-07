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
