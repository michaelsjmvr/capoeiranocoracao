// Seleciona os botões e o menu
const menuOpenBtn = document.querySelector('.menu-toggle-open');
const menuCloseBtn = document.querySelector('.menu-toggle-close');
const nav = document.querySelector('.header-mobile nav');

// Função para abrir o menu
menuOpenBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    nav.style.display = 'flex'; // Exibe o menu
    menuOpenBtn.style.display = 'none'; // Esconde o botão de abrir
    menuCloseBtn.style.display = 'block'; // Exibe o botão de fechar
});

// Função para fechar o menu
menuCloseBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    nav.style.display = 'none'; // Oculta o menu
    menuOpenBtn.style.display = 'block'; // Exibe o botão de abrir
    menuCloseBtn.style.display = 'none'; // Esconde o botão de fechar
});