export class LucroETaxas {
    constructor() {
        this.taxasSomadas = 0;
        this.margemLucro = 0;
    }

    somaTaxas() {
        const formLucrosETaxas = document.querySelector('[data-form="lucros-taxas"]');
        const listaInputsLucrosETaxas = formLucrosETaxas.querySelectorAll('[data-input]');
        const arraylistaInputsLucrosETaxas = Array.from(listaInputsLucrosETaxas);

        const valoresTaxas = arraylistaInputsLucrosETaxas.map(function (input) {
            if (input.value.length >= 1) {
                return parseFloat(input.value);
            }
            return input.value = 0;
        })

        const somaTaxas = valoresTaxas.reduce(function(acum, atual) {
            return acum + atual
        })
        
        this.taxasSomadas = somaTaxas;

        return somaTaxas;
    }

    calculaMarkUp() {
        const markUp = 100 / (100 - this.somaTaxas());
        return markUp;
    }
}