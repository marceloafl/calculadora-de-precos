export class CustoVariavelUnitario {
    constructor(){
        this.custoVariavelUnitario = 0;
    }

    calculaCustoVariavelUnitario() {
        const formCustoVarUnit = document.querySelector('[data-form="custo-variavel-unitario"]');
        const listaInputCustoVarUnit = formCustoVarUnit.querySelectorAll('[data-input]');
        const arrayListaInputCustVarUnit = Array.from(listaInputCustoVarUnit);

        const valoresInputCustVarUnit = arrayListaInputCustVarUnit.map(function(input) {
            if (input.value.length >= 1 && input.value >= 0) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        const custoVariavelUnitario = valoresInputCustVarUnit.reduce(function(acum, atual) {
            return acum + atual;
        });

        this.custoVariavelUnitario = custoVariavelUnitario;

        return custoVariavelUnitario;
    }

    preencheInputCustoVariavelUnitario() {
        const inputCustoVarUnitario = document.querySelector('[data-resultado="custo-variavel-unitario"]');
        inputCustoVarUnitario.value = (this.calculaCustoVariavelUnitario()).toFixed(2);
    }
}