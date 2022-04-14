import { exibeInputResultado } from './despesaEstrutural.js';

const secaoCustoFixo = document.querySelector('[data-secao="custo-fixo"]');
const inputs = secaoCustoFixo.querySelectorAll('[data-input]')

inputs.forEach(input => {
    input.addEventListener('change', () => {
        const valorDoAtributo = input.dataset.tipo;
        exibeInputResultado(valorDoAtributo);
        exibeTotalNoInput();
    })
})

const botaoCustoFixo = document.querySelector('[data-botao="custo-fixo"]');
botaoCustoFixo.addEventListener('click', () => {
    
})

function recuperaTotais(){
    const secao = document.querySelector('[data-secao="custo-fixo"]');
    const inputsTotais = secao.querySelectorAll('[data-resultado]');

    let valores = [];

    inputsTotais.forEach(input => {
        if (input.value.length === 0){
            input.value = 0;
        }
        valores.push(parseFloat(input.value));
    })
    return valores;  
}

export function somaTotais(){
    const totais = recuperaTotais();

    let soma = totais.reduce(function(acum, atual){
        return acum + atual;
    })
    return soma;
}

export function exibeTotalNoInput(){
    const soma = somaTotais();

    const input = document.querySelector('[data-total="custo-fixo"]');
    input.value = soma.toFixed(2);
    return soma;
}






