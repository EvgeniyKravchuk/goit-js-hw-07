const fontSizeControllerRef = document.querySelector('#font-size-control');
const updatedTextRef = document.querySelector('#text');

updatedTextRef.style.fontSize = '50px';

fontSizeControllerRef.addEventListener('input', onInputSizeController)

function onInputSizeController(action) {
    updatedTextRef.style.fontSize = `${fontSizeControllerRef.value}px`
}