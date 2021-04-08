const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const createButtonRef = document.querySelector("button[data-action='render']");
const destroyButtonRef = document.querySelector("button[data-action='destroy']");

const box = document.createElement('div');
box.style.width = '30px';
box.style.height = '30px';

function makeRandomBackgroundColor(element) {
    return element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
};

createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes)

function createBoxes() {
    
};
function destroyBoxes() {
    boxesRef.innerHTML = '';
};