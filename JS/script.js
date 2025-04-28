const menuHamburguer = document.getElementById('menu-hamburguer');
const nav = document.getElementById('nav');

menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
});