// Função para validar o formulário de contato
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    return true;
}

function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                alert('Formulário enviado com sucesso!');
                contactForm.reset();
            }
        });
    }
});
