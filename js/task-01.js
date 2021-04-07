const categoriesListRef = document.querySelector('#categories');
const categoriesListItemsRef = categoriesListRef.querySelectorAll('.item')

console.log(`В списке ${categoriesListItemsRef.length} категории:`);
categoriesListItemsRef.forEach(category => {
    console.log(`Категория: ${category.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${category.querySelectorAll('li').length};`);
    console.log(' ');
})