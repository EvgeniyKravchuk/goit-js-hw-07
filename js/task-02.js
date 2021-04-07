const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector('#ingredients');
const indredientsListItems = [];

for (const ingredient of ingredients) {
    const ingredientsListItem = document.createElement('li');
    ingredientsListItem.textContent = ingredient;
    indredientsListItems.push(ingredientsListItem);
};

ingredientsListRef.append(...indredientsListItems);