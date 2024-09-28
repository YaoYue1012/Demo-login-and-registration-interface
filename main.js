
document.getElementById('show_password').addEventListener('change', function() {
    const passwordInput = document.getElementById('input-pass');
    passwordInput.type = this.checked ? 'text' : 'password';
});


// document.getElementById('show_register_password').addEventListener('change', function() {
//     const passwordInput = document.getElementById('input-pass');
//     passwordInput.type = this.checked ? 'text' : 'password';
// });


document.addEventListener('DOMContentLoaded', function() {
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.button_login');
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.remove('active-popup');
    });

});
