const counterButtonsRef = document.querySelectorAll('button');
const counterValueRef = document.querySelector('#value');

counterButtonsRef[0].addEventListener('click', onDecrementButtonClick);
counterButtonsRef[1].addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick (action) {
    counterValueRef.textContent -= 1;
};
function onIncrementButtonClick (action) {
    counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
};