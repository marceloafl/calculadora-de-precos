import { CustoFixo } from "./custo-fixo.js"

const custoFixo = new CustoFixo;

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

        console.log('CusFix Total antes', custoFixo.custoFixo);
        let custoFixoAtual = custoFixo.calculaCustoFixoTotal();
        custoFixo.preencheCustoFixoTotal();
        custoFixo.defineCustoFixoTotal();
        console.log('CusFix Total depois', custoFixo.custoFixo);

    })
})






