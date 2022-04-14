import { escondeTrInstrucao } from './escondeTh.js';
import { exibeTotalNoInput } from '../custoFixo/custoFixo.js'

const botoesAdicionar = document.querySelectorAll('[data-adicionar]');

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', event => {
        event.preventDefault();

        const botaoClicado = defineBotaoClicado(event);        
        exibeSoma(botaoClicado);
        exibeTotalNoInput();
        
        escondeTrInstrucao();
    })
})

function defineBotaoClicado(event){
    const botaoClicado = event.target;
    return botaoClicado;
}

function selecionaTipo(botaoClicado){
    const tipo = botaoClicado.dataset.adicionar;
    return tipo;
}

function defineTipoDeTabela(botaoClicado){
    if(selecionaTipo(botaoClicado) === 'equipamento'){
        const tabela = document.querySelector('[data-tabela="equipamento"]');
        return tabela;
    } else if (selecionaTipo(botaoClicado) === 'material'){
        const tabela = document.querySelector('[data-tabela="material"]');
        return tabela;
    }
}

function selecionaTds(botaoClicado){
    const tabela = defineTipoDeTabela(botaoClicado);
    const tds = tabela.querySelectorAll('[data-td="valor"]')
    return tds;
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
    return somaTds;
}

function selecionaInput(botaoClicado){
    
    if(selecionaTipo(botaoClicado) === 'equipamento'){
        const input = document.querySelector('[data-resultado="equipamento"]');
        return input;
    } else if (selecionaTipo(botaoClicado) === 'material'){
        const input = document.querySelector('[data-resultado="material"]');
        return input;
    }
}

function exibeSoma(botaoClicado){
    const input = selecionaInput(botaoClicado);
    input.value = somaTds(botaoClicado).toFixed(2);
}








