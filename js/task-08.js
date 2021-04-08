const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const createButtonRef = document.querySelector("button[data-action='render']");
const destroyButtonRef = document.querySelector("button[data-action='destroy']");

let boxes = [];

function makeRandomBackgroundColor(element) {
    return element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
};

createButtonRef.addEventListener('click', onCreateBoxesClick);
destroyButtonRef.addEventListener('click', onDestroyBoxesClick);

function onCreateBoxesClick(ev) {
    const value = inputRef.value;
    
    for (let i = 0; i < value; i++) {
        const box = document.createElement('div');
        box.style.width = `${(30 + i * 10)}px`;
        box.style.height = `${(30 + i * 10)}px`;
        makeRandomBackgroundColor(box);
        boxes.push(box)
    }
    boxesRef.prepend(...boxes)
    boxes = []
};
function onDestroyBoxesClick (ev) {
    boxesRef.innerHTML = '';
};

