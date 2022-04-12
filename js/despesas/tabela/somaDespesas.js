const botoesAdicionar = document.querySelectorAll('[data-adicionar]');

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', event => {
        event.preventDefault();


        const botaoClicado = event.target;
        mostra(botaoClicado);
    })
})

function selecionaTipo(botaoClicado){
    const tipo = botaoClicado.dataset.adicionar;
    return tipo;  // RETORNA O VALOR DO DATASET ADICIONAR DOS BOTOES
}

function defineTipoDeTabela(botaoClicado){
    if(selecionaTipo(botaoClicado) === 'equipamento'){
        const tabela = document.querySelector('[data-tabela="equipamento"]');
        return tabela;
    } else if (selecionaTipo(botaoClicado) === 'material'){
        const tabela = document.querySelector('[data-tabela="material"]');
        return tabela;  // RETORNA A TABELA RELACIONADA AO BOTAO CLICADO
    }
}

function selecionaTds(botaoClicado){
    const tabela = defineTipoDeTabela(botaoClicado);
    const tds = tabela.querySelectorAll('[data-td="valor"]')
    return tds;  // RETORNA OS TDs ADICIONADOS
}

function recebeValoresTd(botaoClicado){
    const tds = selecionaTds(botaoClicado);
    let valoresTds = [];
    tds.forEach(td => {
        valoresTds.push(parseFloat(td.innerHTML));
    })
    return valoresTds;
}

function somaTds(botaoClicado){
    const valoresTds = recebeValoresTd(botaoClicado);

    let somaTds = valoresTds.reduce(function(acum, atual){
        return acum + atual;
    })
    return somaTds; // RETORNA A SOMA DOS VALORES DAS TDs
}

function mostra(botaoClicado){
    const elemento = somaTds(botaoClicado);
    console.log(elemento);
}


// CRIA LÓGICA PARA DEFINIR TOTAL DE CADA DESPESA DA TABELA
// PREENCHER/EXIBIR OS TOTAL NOS INPUTS



