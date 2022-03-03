export class CustoVariavelUnitario {
    constructor(){
        this.custoVariavelUnitario = 0;
    }

    validaCustoVariavelUnitario() {
        const formCustoVarUnit = document.querySelector('[data-form="custo-variavel-unitario"]');
        const listaInputCustoVarUnit = formCustoVarUnit.querySelectorAll('[data-input]');
        const arrayListaInputCustVarUnit = Array.from(listaInputCustoVarUnit);

        const valoresInputCustVarUnit = arrayListaInputCustVarUnit.map(function(input) {
            if (input.value.length >= 1 && input.value >= 0) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        return valoresInputCustVarUnit;
    }

    calculaCustoVariavelUnitario(){
        const custoVariavelUnitario = this.validaCustoVariavelUnitario().reduce(function(acum, atual) {
            return acum + atual;
        });       

        return custoVariavelUnitario;
    }

    defineCustoVariavelUnitario() {
        this.custoVariavelUnitario = this.calculaCustoVariavelUnitario();
    }

    preencheInputCustoVariavelUnitario() {
        const inputCustoVarUnitario = document.querySelector('[data-resultado="custo-variavel-unitario"]');
        inputCustoVarUnitario.value = (this.calculaCustoVariavelUnitario()).toFixed(2);
    }

}




