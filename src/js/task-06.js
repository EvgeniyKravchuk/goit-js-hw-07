const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlurValidation)
console.dir(inputRef.dataset.length)
function onBlurValidation(action) {
    if (inputRef.dataset.length == action.currentTarget.value.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
};