const categoriesEl = document.querySelectorAll(".item");

console.log(`В списке ${categoriesEl.length} категории`);

categoriesEl.forEach((category) => {
  console.log(`Категория: ${category.firstElementChild.textContent}`);

  const list = category.querySelectorAll(".item li");
  console.log(`Количество элементов: ${list.length}`);
});
