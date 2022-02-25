export class CustoFixo {
    constructor() {
        this.custoEstrutural = 0;
        this.despesaAdministrativa = 0;
        this.despesaEquipamentos = 0;
        this.despesaFuncionarios = 0;
        this.custoFixo = 0;
    }

    calculaCustoEstrutural() {
        const formCustoEstr = document.querySelector('[data-form="estruturais"]');
        const listaInputCustoEstr = formCustoEstr.querySelectorAll('[data-input]');
        const arrayListaInputEstr = Array.from(listaInputCustoEstr);

        const valoresCustEstr = arrayListaInputEstr.map(function (input) {
            if (input.value.length >= 1) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        let custoEstrutural = valoresCustEstr.reduce(function(acum, atual) {
            return acum + atual;
        });

        return custoEstrutural;
    }

    defineCustoEstrutural() {
        this.custoEstrutural = this.calculaCustoEstrutural();
    }


    preencheInputCustoEstr() {
        const formCustoEstr = document.querySelector('[data-form="estruturais"]');
        const inputResultCustoEstr = formCustoEstr.querySelector('[data-inputResultado]');

        inputResultCustoEstr.value = this.calculaCustoEstrutural();
    }





    
    calculaDespesaAdministrativa() {
        const formDespAdm = document.querySelector('[data-form="administrativas"]');
        const listaInputDespAdm = formDespAdm.querySelectorAll('[data-input]');
        const arrayListaDespAdm = Array.from(listaInputDespAdm);

        const valoresDespAdm = arrayListaDespAdm.map(function (input) {
            if (input.value.length >= 1) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        let despesaAdm = valoresDespAdm.reduce(function(acum, atual) {
            return acum + atual;
        });

        return despesaAdm;
    }

    defineDespesaAdministrativa() {
        this.despesaAdministrativa = this.calculaDespesaAdministrativa();
    }


    preencheInputDespAdm() {
        const formDespAdm = document.querySelector('[data-form="administrativas"]');
        const inputResultDespAdm = formDespAdm.querySelector('[data-inputResultado]');

        inputResultDespAdm.value = this.calculaDespesaAdministrativa();
    }








    calculaDespesaEquipamentos() {
        const formDespEquip = document.querySelector('[data-form="equipamentos"]');
        const listaInputDespEquip = formDespEquip.querySelectorAll('[data-input]');
        const arrayListaDespEquip = Array.from(listaInputDespEquip);

        const valoresDespEquip = arrayListaDespEquip.map(function (input) {
            if (input.value.length >= 1) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        let despesaEquip = valoresDespEquip.reduce(function(acum, atual) {
            return acum + atual;
        });

        return despesaEquip;
    }

    defineDespesaEquipamentos() {
        this.despesaEquipamentos = this.calculaDespesaEquipamentos();
    }

    preencheInputDespEquip() {
        const formDespEquip = document.querySelector('[data-form="equipamentos"]');
        const inputResultDespEquip = formDespEquip.querySelector('[data-inputResultado]');

        inputResultDespEquip.value = this.calculaDespesaEquipamentos();
    }






    calculaDespesaFuncionarios() {
        const formDespFunc = document.querySelector('[data-form="funcionarios"]');
        const listaInputDespEquip = formDespFunc.querySelectorAll('[data-input]');
        const arrayListaDespFunc = Array.from(listaInputDespEquip);

        const valoresDespFunc = arrayListaDespFunc.map(function (input) {
            if (input.value.length >= 1) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        let despesaFunc = valoresDespFunc.reduce(function(acum, atual) {
            return acum + atual;
        });

        return despesaFunc;
    }

    defineDespesaFuncionarios() {
        this.despesaFuncionarios = this.calculaDespesaFuncionarios();
    }

    preencheInputDespFunc() {
        const formDespFunc = document.querySelector('[data-form="funcionarios"]');
        const inputResultDespFunc = formDespFunc.querySelector('[data-inputResultado]');

        inputResultDespFunc.value = this.calculaDespesaFuncionarios();
    }





    calculaCustoFixoTotal() {
        const custoFixoTotal = this.custoEstrutural + this.despesaAdministrativa + this.despesaEquipamentos + this.despesaFuncionarios;
        return custoFixoTotal;
    }

    defineCustoFixoTotal() {
        this.custoFixo = this.calculaCustoFixoTotal();
    }

    preencheCustoFixoTotal() {
        const inputCustoFixoTotal = document.querySelector('[data-resultado="custo-fixo"]');

        inputCustoFixoTotal.value = this.calculaCustoFixoTotal();
    }

}




