import { somaTotais } from './despesas/custoFixo/custoFixo.js';
import { calculaProdutividade } from './despesas/produtividade/produtividade.js'

// CALCULADORA CENTRAL UNINDO AS CONTAS



const botaoTaxas = document.querySelector('[data-botao="lucros-taxas"]');
botaoTaxas.addEventListener('click',  () => {
    const custoFixo = somaTotais();
    const produtividade = calculaProdutividade();
    //const custoFixoUnitario = somaTotais();
    //const custoVariavelUnitario = somaTotais();
    //const markUp = somaTotais();
    
    console.log(custoFixo);
    console.log(produtividade);
})
