export class LucroETaxas {
    constructor() {
        this.taxasSomadas = 0;
        this.markUp = 0;
    }

    validaTaxas() {
        const formLucrosETaxas = document.querySelector('[data-form="lucros-taxas"]');
        const listaInputsLucrosETaxas = formLucrosETaxas.querySelectorAll('[data-input]');
        const arraylistaInputsLucrosETaxas = Array.from(listaInputsLucrosETaxas);

        const valoresTaxas = arraylistaInputsLucrosETaxas.map(function (input) {
            if (input.value.length >= 1 && input.value >= 0) {
                return parseFloat(input.value);
            } else {
                return input.value = 0;
            }
        })

        return valoresTaxas;
    }

    somaTaxas() {
        const somaTaxas = this.validaTaxas().reduce(function(acum, atual) {
            return acum + atual
        })       

        return somaTaxas;
    }

    defineSomaTaxas() {
        this.taxasSomadas = this.somaTaxas();
    }

    calculaMarkUp() {
        const markUp = 100 / (100 - this.somaTaxas());
        return markUp;
    }

    defineMarkUp() {
        this.markUp = this.calculaMarkUp();
    }
    
}




