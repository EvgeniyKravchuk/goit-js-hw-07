const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', onInputName);

function onInputName(action) {
    nameOutputRef.textContent = action.currentTarget.value;
    if (nameOutputRef.textContent === '') {
        nameOutputRef.textContent = 'незнакомец'
    }
};