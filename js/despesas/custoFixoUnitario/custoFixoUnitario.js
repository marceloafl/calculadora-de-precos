import { somaTotais } from '../custoFixo/custoFixo.js';
import { calculaProdutividade } from '../produtividade/produtividade.js'

const botaoProdutividade = document.querySelector('[data-botao="produtividade"]');
botaoProdutividade.addEventListener('click', () => {
    exibeCustoFixoPorHora();
    exibeCustoFixoPorMinuto();
})

const inputTempoNecessario = document.querySelector('[data-despesa="tempo-necessario"]');
inputTempoNecessario.addEventListener('change', () => {
    exibeCustoFixoUnitario();
})

function calculaCustoFixoPorHora(){
    const custoFixo = somaTotais();
    const produtividade = calculaProdutividade();
    
    const custoFixoPorHora = custoFixo / produtividade;
    return custoFixoPorHora;
}

function exibeCustoFixoPorHora(){
    const inputCustoFixoPorHora = document.querySelector('[data-despesa="custo-fixo-hora"]');
    const custoFixoPorHora = calculaCustoFixoPorHora();
    inputCustoFixoPorHora.value = custoFixoPorHora.toFixed(2);
}

function calculaCustoFixoPorMinuto(){
    const custoFixoPorHora = calculaCustoFixoPorHora();
    const custoFixoPorMinuto = custoFixoPorHora / 60;
    return custoFixoPorMinuto;
}

function exibeCustoFixoPorMinuto(){
    const inputCustoFixoPorMinuto = document.querySelector('[data-despesa="custo-fixo-minuto"]');
    const custoFixoPorMinuto = calculaCustoFixoPorMinuto();
    inputCustoFixoPorMinuto.value = custoFixoPorMinuto.toFixed(2);
}

function recebeTempoNecessario(){
    const inputTempoNecessario = document.querySelector('[data-despesa="tempo-necessario"]');
    const tempoNecessario = inputTempoNecessario.value;
    return tempoNecessario;
}

function calculaCustoFixoUnitario(){
    const custoFixoPorMinuto = calculaCustoFixoPorMinuto();
    const tempoNecessario = recebeTempoNecessario();
    const custoFixoUnitario = custoFixoPorMinuto * tempoNecessario;
    console.log(custoFixoUnitario);
    return custoFixoUnitario;
}

function exibeCustoFixoUnitario(){
    const inputCustoFixoUnitario = document.querySelector('[data-total="custo-fixo-unitario"]');
    const custoFixoUnitario = calculaCustoFixoUnitario();
    inputCustoFixoUnitario.value = custoFixoUnitario.toFixed(2);
}
