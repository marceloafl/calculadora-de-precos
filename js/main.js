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

        custoFixo.calculaCustoEstrutural();
        custoFixo.preencheInputCustoEstr();
        custoFixo.defineCustoEstrutural();

        custoFixo.calculaDespesaAdministrativa();
        custoFixo.preencheInputDespAdm();
        custoFixo.defineDespesaAdministrativa();

        custoFixo.calculaDespesaEquipamentos();
        custoFixo.preencheInputDespEquip();
        custoFixo.defineDespesaEquipamentos();

        custoFixo.calculaDespesaFuncionarios();
        custoFixo.preencheInputDespFunc();
        custoFixo.defineDespesaFuncionarios();

        const custoFixoAtual = custoFixo.calculaCustoFixoTotal();
        custoFixo.preencheCustoFixoTotal();
        custoFixo.defineCustoFixoTotal();

        produtividade.calculaHorasTrabMes();
        produtividade.defineHorasTrabMes();

        const produtividadeAtual = produtividade.calculaProdutividade()
        produtividade.defineProdutividade();

        const custoFixoHora = custoFixoUnitario.calculaCustoFixoHora(custoFixoAtual, produtividadeAtual);
        const custoFixoMinuto = custoFixoUnitario.calculaCustoFixoMinuto(custoFixoHora);
        const tempoDeExecucaoAtual = custoFixoUnitario.recebeTempoDeExecucao()
        const custoFixoUnitarioAtual = custoFixoUnitario.calculaCustoFixoUnitario(custoFixoMinuto, tempoDeExecucaoAtual);

        custoFixoUnitario.preencheInputCustoFixoHora();
        custoFixoUnitario.preencheInputCustoFixoMinuto();
        custoFixoUnitario.preencheInputCustoFixoUnitario();

        const custoVariavelUnitarioAtual = custoVariavelUnitario.calculaCustoVariavelUnitario();
        custoVariavelUnitario.preencheInputCustoVariavelUnitario();

        const custoDeProducao = custoFixoUnitarioAtual + custoVariavelUnitarioAtual;

        lucroETaxas.somaTaxas();
        const markUpAtual = lucroETaxas.calculaMarkUp();

        const formResultadoFinal = document.querySelector('[data-form="resultado-final"]');
        const inputResultadoCustoUnitarioFixo = formResultadoFinal.querySelector('[data-input="resultado-final-custo-unit-fixo"]');
        const inputResultadoCustoUnitarioVar = formResultadoFinal.querySelector('[data-input="resultado-final-custo-unit-var"]');
        const inputResultadoCustoUnitarioTotal = formResultadoFinal.querySelector('[data-input="resultado-final-custo-unit-total"]');
        const inputResultadoPrecoMinimo = formResultadoFinal.querySelector('[data-input="resultado-final-preco-minimo"]');

        inputResultadoCustoUnitarioFixo.value = (custoFixoUnitarioAtual).toFixed(2);
        inputResultadoCustoUnitarioVar.value = (custoVariavelUnitarioAtual).toFixed(2);
        inputResultadoCustoUnitarioTotal.value = (custoDeProducao).toFixed(2);
        inputResultadoPrecoMinimo.value = (custoDeProducao * markUpAtual).toFixed(2);

    })
})



// AJUSTAR NaN E PREENCHIMENTO DE INPUTS INDEFINIDOS





