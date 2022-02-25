import { CustoFixo } from "./custo-fixo.js"
import { Produtividade } from "./capacidade-produtiva.js"

const custoFixo = new CustoFixo;
const produtividade = new Produtividade;

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

        let custoFixoAtual = custoFixo.calculaCustoFixoTotal();
        custoFixo.preencheCustoFixoTotal();
        custoFixo.defineCustoFixoTotal();

        produtividade.calculaHorasTrabMes();
        produtividade.defineHorasTrabMes();

        let produtividadeAtual = produtividade.calculaProdutividade()
        produtividade.defineProdutividade();

        console.log('Custo Fixo: ', custoFixoAtual);
        console.log('Produtividade: ', produtividadeAtual);

    })
})







