const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirmation');
const error = document.querySelector('#error');

let pass = '';

password.addEventListener('input', e => {
    pass = e.target.value;
    error.innerHTML = '*Passwords do not match';
    error.classList.add('error');
    confirmation.style.outline = 'solid 1px red';
});

confirmation.addEventListener('input', e => {
    const confirm = e.target.value;
    if (confirm == pass) {
        error.innerHTML = '';
    error.classList.remove('error');
    confirmation.style.outline = ''; 
    }
});
