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

        const produtividadeAtual = produtividade.calculaProdutividade()

        const custoFixoHora = custoFixoUnitario.calculaCustoFixoHora(custoFixoAtual, produtividadeAtual);
        const custoFixoMinuto = custoFixoUnitario.calculaCustoFixoMinuto(custoFixoHora);
        const tempoDeExecucaoAtual = custoFixoUnitario.recebeTempoDeExecucao()
        const custoFixoUnitarioAtual = custoFixoUnitario.calculaCustoFixoUnitario(custoFixoMinuto, tempoDeExecucaoAtual);

        custoFixoUnitario.preencheInputCustoFixoHora();
        custoFixoUnitario.preencheInputCustoFixoMinuto();
        custoFixoUnitario.preencheInputCustoFixoUnitario();

        const custoVariavelUnitarioAtual = custoVariavelUnitario.calculaCustoVariavelUnitario();
        custoVariavelUnitario.preencheInputCustoVariavelUnitario();

        const custoDeProducaoAtual = custoFixoUnitarioAtual + custoVariavelUnitarioAtual;

        lucroETaxas.somaTaxas();
        const markUpAtual = lucroETaxas.calculaMarkUp();

        const formResultadoFinal = document.querySelector('[data-form="resultado-final"]');
        const inputResultadoCustoUnitarioFixo = formResultadoFinal.querySelector('[data-input="resultado-final-custo-unit-fixo"]');
        const inputResultadoCustoUnitarioVar = formResultadoFinal.querySelector('[data-input="resultado-final-custo-unit-var"]');
        const inputResultadoCustoUnitarioTotal = formResultadoFinal.querySelector('[data-input="resultado-final-custo-unit-total"]');
        const inputResultadoPrecoMinimo = formResultadoFinal.querySelector('[data-input="resultado-final-preco-minimo"]');

        if (custoFixoUnitarioAtual >= 0) {
            inputResultadoCustoUnitarioFixo.value = (custoFixoUnitarioAtual).toFixed(2);
        } else {
            inputResultadoCustoUnitarioFixo.value = 0;
        }

        if (custoVariavelUnitarioAtual >= 0) {
            inputResultadoCustoUnitarioVar.value = (custoVariavelUnitarioAtual).toFixed(2);
        } else {
            inputResultadoCustoUnitarioVar.value = 0;
        }

        if (custoDeProducaoAtual >= 0) {
            inputResultadoCustoUnitarioTotal.value = (custoDeProducaoAtual).toFixed(2);
        } else {
            inputResultadoCustoUnitarioTotal.value = 0;
        }

        if (custoDeProducaoAtual >= 0) {
            inputResultadoPrecoMinimo.value = (custoDeProducaoAtual * markUpAtual).toFixed(2);
        } else {
            inputResultadoPrecoMinimo.value = 0;
        }

        console.log('Custo Fixo: ', custoFixoAtual);
        console.log('Produtividade: ', produtividadeAtual);
        console.log('Custo Fixo Unitário: ', custoFixoUnitarioAtual);
        console.log('CustoVariável Unitário: ', custoVariavelUnitarioAtual);
        console.log('Custo de Produção: ', custoDeProducaoAtual);
        console.log('MarkUp: ', markUpAtual);

    })
})











// AJUSTAR NaN E PREENCHIMENTO DE INPUTS INDEFINIDOS





