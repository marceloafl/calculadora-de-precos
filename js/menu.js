const menu = document.querySelector('.menu');

const botaoMenuAbrir = document.querySelector('.icone__menu--abrir');
const botaoMenuFechar = document.querySelector('.icone__menu--fechar');

botaoMenuAbrir.addEventListener('click', function () {
    menu.classList.add('menu__ativo');
});

botaoMenuFechar.addEventListener('click', function () {
    menu.classList.remove('menu__ativo');
});

const botaoMenuBlog = document.querySelectorAll('[ data-button-menu]');

botaoMenuBlog.forEach(function (botao) {
    botao.addEventListener('click', function () {
        menu.classList.remove('menu__ativo');
    })
})
