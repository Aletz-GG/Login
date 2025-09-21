//Obterner elemento activo

//Remover clase activo al elemento obtenido

//Añadir clase activo al elemento seleccionado

const formBoxes = document.querySelectorAll('.form-box');
const links = document.querySelectorAll('.login-link, .register-link, .password-link, .change-link');


function activateForm(target) {

    formBoxes.forEach(form => form.classList.remove('active'));
    target.classList.add('active');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        const targetClass = link.classList[0].replace('-link', '');
        const targetForm = document.querySelector(`.${targetClass}`);
        activateForm(targetForm);
    });
});
