const botaoMenu = document.querySelectorAll('[data-navegacao]');

botaoMenu.forEach(botao => {
    botao.addEventListener('click', () => {
        manipulaIconeMenu(botao)
    })
})

function controlaMenu(botao){
    const menu = document.querySelector('[data-container="menu"]');
    const principal = document.querySelector('[data-container="principal"]');

    let menuAberto = false;

    if(botao.dataset.navegacao === 'abrir-menu'){
        menu.classList.remove('inativo');
        principal.classList.add('inativo');
        menuAberto = true;
    } else {
        menu.classList.add('inativo');
        principal.classList.remove('inativo');
    }

    return menuAberto;
}

function manipulaIconeMenu(botao){
    const iconeAbrirMenu = document.querySelector('[data-navegacao="abrir-menu"]')
    const iconeFecharMenu = document.querySelector('[data-navegacao="fechar-menu"]')

    if(controlaMenu(botao)){
        botao.classList.add('inativo');
        iconeFecharMenu.classList.remove('inativo');

    } else {
        botao.classList.add('inativo');
        iconeAbrirMenu.classList.remove('inativo');
    }
}

