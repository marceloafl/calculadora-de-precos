import { somaTotais } from './despesas/custoFixo/custoFixo.js';
import { calculaProdutividade } from './despesas/produtividade/produtividade.js';
import { calculaCustoFixoUnitario } from './despesas/custoFixoUnitario/custoFixoUnitario.js';
import { somaTds } from './despesas/custoVariavelUnitario/custoVariavelUnitario.js';
import { calculaMarkUp } from './despesas/markUp/markUp.js';


const botaoTaxas = document.querySelector('[data-botao="lucros-taxas"]');
botaoTaxas.addEventListener('click',  () => {
    const custoFixo = somaTotais();
    const produtividade = calculaProdutividade();
    const custoFixoUnitario = calculaCustoFixoUnitario(custoFixo, produtividade);
    const custoVariavelUnitario = somaTds();
    const custoTotalDoServico = calculaCustoTotalDoServico(custoFixoUnitario, custoVariavelUnitario);
    const markUp = calculaMarkUp();

    const sugestaoDePreco = calculaSugestaoDePreco(custoTotalDoServico, markUp);

    exibeResultado(custoFixo, produtividade, custoFixoUnitario, custoVariavelUnitario, custoTotalDoServico, markUp);

    console.log('custo fixo', typeof custoFixo, custoFixo);
    console.log('produtividade', typeof produtividade, produtividade);
    console.log('custo fixo unitario', typeof custoFixoUnitario, custoFixoUnitario);
    console.log('custo variavel unitario', typeof custoVariavelUnitario, custoVariavelUnitario);
    console.log('custo total do servico', typeof custoTotalDoServico, custoTotalDoServico);
    console.log('markup', typeof markUp, markUp);
    console.log('sugestao de preço', typeof sugestaoDePreco, sugestaoDePreco);
})

function calculaCustoTotalDoServico(custoFixoUnitario, custoVariavelUnitario){
    const custoTotalDoServico = custoFixoUnitario + custoVariavelUnitario;
    return parseFloat(custoTotalDoServico);
}

function calculaSugestaoDePreco(custoTotalDoServico, markUp){
    const sugestaoDePreco = custoTotalDoServico * markUp;
    return sugestaoDePreco;
}

function exibeResultado(custoFixo, produtividade, custoFixoUnitario, custoVariavelUnitario, custoTotalDoServico, markUp){
    const inputCustoUnitarioFixo = document.querySelector('[data-final="custo-unitario-fixo"]');
    const custoUnitarioFixo = calculaCustoFixoUnitario(custoFixo, produtividade);
    inputCustoUnitarioFixo.value = custoUnitarioFixo.toFixed(2);

    const inputCustoUnitarioVariavel = document.querySelector('[data-final="custo-unitario-variavel"]');
    const custoUnitarioVariavel = somaTds();
    inputCustoUnitarioVariavel.value = custoUnitarioVariavel.toFixed(2);

    const inputCustoUnitarioTotal = document.querySelector('[data-final="custo-unitario-total"]');
    const custoUnitarioTotal = calculaCustoTotalDoServico(custoFixoUnitario, custoVariavelUnitario);
    inputCustoUnitarioTotal.value = custoUnitarioTotal.toFixed(2);

    const inputResultado = document.querySelector('[data-final="resultado"]');
    const resultado = calculaSugestaoDePreco(custoTotalDoServico, markUp);
    inputResultado.value = resultado.toFixed(2);
}

