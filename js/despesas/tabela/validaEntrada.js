import { selecionaTipo } from './criaTabela.js'

function selecionaSecao(botaoClicado){
    const tipo = selecionaTipo(botaoClicado);

    if(tipo === 'equipamento'){
        const secao = document.querySelector('[data-inputtabela="equipamento"]');
        return secao;
    } else if (tipo === 'material'){
        const secao = document.querySelector('[data-inputtabela="material"]');
        return secao;
    }
}

function selecionaInputs(botaoClicado){
    const secao = selecionaSecao(botaoClicado);
    const inputs = secao.querySelectorAll('[data-input]');
    return inputs;
}

export function validaEntrada(botaoClicado){
    const inputs = selecionaInputs(botaoClicado);
    let entradaValida = true;

    inputs.forEach(input => {
        const entrada = input.value;
        
        if (entrada.length == 0){
            entradaValida = false;
            return entradaValida;
        }
    });
    return entradaValida;
}

function criaMensagemDeErro(botaoClicado){
    if (!validaEntrada(botaoClicado)){
        const mensagem = document.createElement('p');
        mensagem.textContent = 'Por favor, preencha os campos acima.';
        return mensagem;
    }
}

export function exibeMensagemDeErro(botaoClicado){
    const mensagem = criaMensagemDeErro(botaoClicado)
    mensagem.classList.add('tabela__input--erro');
    botaoClicado.insertAdjacentElement('beforebegin', mensagem); 

    setTimeout(() => {
        mensagem.remove();    
    }, 3000);
}






