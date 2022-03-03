import { CustoFixo } from "./custo-fixo.js"
import { Produtividade } from "./capacidade-produtiva.js"
import { CustoFixoUnitario } from "./custo-fixo-unitario.js"
import { CustoVariavelUnitario } from "./custo-variavel-unitario.js"
import { LucroETaxas } from "./lucros-taxas.js"

const custoFixo = new CustoFixo;
const produtividade = new Produtividade;
const custoFixoUnitario = new CustoFixoUnitario
const custoVariavelUnitario = new CustoVariavelUnitario;
const lucroETaxas = new LucroETaxas;



const listaInput = document.querySelectorAll('[data-input]');

listaInput.forEach( input => {
    input.addEventListener('change', () => {


        function obtemCustoFixo(){
            custoFixo.preencheCustoEstrutural();
            custoFixo.defineCustoEstrutural();

            custoFixo.preencheDespesaAdministrativa();
            custoFixo.defineDespesaAdministrativa();
                
            custoFixo.preencheDespesaEquipamentos();
            custoFixo.defineDespesaEquipamentos();
                
            custoFixo.preencheDespesaFuncionarios();
            custoFixo.defineDespesaFuncionarios();

            custoFixo.preencheCustoFixo();

            const custoFixoAtual = custoFixo.custoFixo;
            return custoFixoAtual;
        }


        function obtemProdutividade(){
            produtividade.preencheInputHorasMes();
            produtividade.preencheInputProdutividade();

            const produtividadeAtual = produtividade.produtividade;
            return produtividadeAtual;
        }


        function obtemCustoFixoUnitario(){
            const custoFixoHoraAtual = custoFixoUnitario.calculaCustoFixoHora(obtemCustoFixo(), obtemProdutividade());
            custoFixoUnitario.preencheInputCustoFixoHora();
            const custoFixoMinAtual = custoFixoUnitario.calculaCustoFixoMinuto(custoFixoHoraAtual);
            custoFixoUnitario.preencheInputCustoFixoMinuto();
            const tempoDeExecucaoAtual = custoFixoUnitario.recebeTempoDeExecucao()

            custoFixoUnitario.preencheInputCustoFixoUnitario();

            const custoFixoUnitarioAtual = custoFixoUnitario.calculaCustoFixoUnitario(custoFixoMinAtual, tempoDeExecucaoAtual);
            return custoFixoUnitarioAtual;

        }


        function obtemCustoVariavelUnitario(){
            custoVariavelUnitario.defineCustoVariavelUnitario();
            custoVariavelUnitario.preencheInputCustoVariavelUnitario();

            const custoVariavelUnitarioAtual = custoVariavelUnitario.custoVariavelUnitario;
            return custoVariavelUnitarioAtual;
        }


        function obtemCustoTotalDoProduto(){
            const custoTotalDoProduto = obtemCustoFixoUnitario() + obtemCustoVariavelUnitario();
            return custoTotalDoProduto
        }


        function obtemMarkUp(){
            lucroETaxas.calculaMarkUp();
            lucroETaxas.defineMarkUp();
            lucroETaxas.defineSomaTaxas();

            const markUpAtual = lucroETaxas.markUp;
            return markUpAtual;
        }


        function obtemSugestaoDePreco(){
            const sugestaoDePreco = obtemCustoTotalDoProduto() * obtemMarkUp();
            return sugestaoDePreco;
        }


        function preencheInputCustoUnitarioFixo(){
            const inputResultadoCustoUnitarioFixo = document.querySelector('[data-input="resultado-final-custo-unit-fixo"]');
            inputResultadoCustoUnitarioFixo.value = (custoFixoUnitario.custoFixoUnitario).toFixed(2);
        }


        function preencheInputCustoUnitarioVariavel(){
            const inputResultadoCustoUnitarioVariavel = document.querySelector('[data-input="resultado-final-custo-unit-var"]');
            inputResultadoCustoUnitarioVariavel.value = (custoVariavelUnitario.custoVariavelUnitario).toFixed(2);
        }


        function preencheInputCustoUnitarioTotal(){
            const inputResultadoCustoUnitarioTotal = document.querySelector('[data-input="resultado-final-custo-unit-total"]');
            inputResultadoCustoUnitarioTotal.value = (obtemCustoTotalDoProduto()).toFixed(2);
        }


        function preencheSugestaoPreco() {
            const inputResultadoCustoUnitarioTotal = document.querySelector('[data-input="resultado-final-preco-minimo"]');
            inputResultadoCustoUnitarioTotal.value = (obtemSugestaoDePreco().toFixed(2));
        }


        preencheInputCustoUnitarioFixo();
        preencheInputCustoUnitarioVariavel();
        preencheInputCustoUnitarioTotal();
        preencheSugestaoPreco();


        function imprimeValores(){
            console.log('Custo Fixo: ', obtemCustoFixo())
            console.log('Produtividade: ', obtemProdutividade())
            console.log('Custo Fixo Unitário: ', obtemCustoFixoUnitario())
            console.log('Custo Variável Unitário: ', obtemCustoVariavelUnitario())
            console.log('Custo Total do Produto: ', obtemCustoTotalDoProduto())
            console.log('MarkUp: ', lucroETaxas.markUp)
        }

        imprimeValores();

    })
})













