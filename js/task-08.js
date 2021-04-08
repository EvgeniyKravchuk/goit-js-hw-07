const inputRef = document.querySelector('input');
const createButtonRef = document.querySelector("button[data-action='render']");
const destroyButtonRef = document.querySelector("button[data-action='destroy']");

const box = document.createElement('div');
box.style.width = '30px';
box.style.height = '30px';
box.style.backgroundColor = randomColor;

function randomColor() {
    const color = `rgb(
        ${Math.floor(Math.random() * 256},
        $())`
    return color
}