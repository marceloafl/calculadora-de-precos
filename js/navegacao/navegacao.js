import { selecionaElemento } from '../elementos/selecionaElemento.js';

const botoesProximo = document.querySelectorAll('[data-navegacao]');

let etapaNavegacao = 0;

botoesProximo.forEach((botao) => {
    botao.addEventListener('click', function (event){
        selecionaSecao(event)
    })
})

function recebeInstrucao(event){
    const botaoClicado = event.target;
    const instrucao = botaoClicado.dataset.navegacao;
    return instrucao;    
}

function controlaEtapa(event) {
    const instrucao = recebeInstrucao(event);

    if (instrucao === 'proximo'){
        etapaNavegacao += 1;
        return etapaNavegacao;
    } else if (instrucao === 'voltar'){
        etapaNavegacao -= 1;
        return etapaNavegacao;
    } else {
        etapaNavegacao = 0;
        location.reload(); // VOLTA PARA PRIMEIRA SECAO E ATUALIZA A PÁGINA
    }
}

function defineEtapa(event){
    let etapa = controlaEtapa(event);
    const etapaAtual = etapasNavegacao[etapa];
    return etapaAtual;
}

function selecionaSecao(event){
    const secoes = document.querySelectorAll('[data-secao]');
    const dataAtributoSecao = defineEtapa(event);

    secoes.forEach(secao => {
        if (secao.dataset.secao === dataAtributoSecao) {
            secao.classList.remove('inativo');
        } else {
            secao.classList.add('inativo');
        }
    })    
}

const etapasNavegacao = {
    0: 'custo-fixo',
    1: 'capacidade-produtiva',
    2: 'custo-fixo-unitario',
    3: 'custo-variavel-unitario',
    4: 'lucros-taxas',
    5: 'resultado-final',
}










