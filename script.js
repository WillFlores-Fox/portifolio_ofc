document.addEventListener('DOMContentLoaded', () => {
  const menuHamburguer = document.getElementById('menu-hamburguer');
  const nav = document.getElementById('nav');
  const header = document.querySelector('header');

  menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('aberto');
    header.classList.toggle('expandido');
  });
});