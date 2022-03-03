export class DespesaAdministrativa {
    constructor(){
        this.despesaAdministrativa = this.defineDespesaAdministrativa();
    }

    validaEntrada(){
        const formDespesaAdministrativa = document.querySelector('[data-form="administrativas"]');
        const listaInputDespesaAdministrativa = formDespesaAdministrativa.querySelectorAll('[data-input]');
        const arrayInputAdministrativa = Array.from(listaInputDespesaAdministrativa);

        const valoresDespesasAdministrativa = arrayInputAdministrativa.map(function(input) {
            if(input.value.length <= 0) {
                return input.value = 0;
            } else {
                return parseFloat(input.value)
            }
        })

        return valoresDespesasAdministrativa;  
    }    

    somaDespesaAdministrativa(){
        const valoresDespesasAdministrativa = this.validaEntrada();
        const somaDespesaAdministrativa = valoresDespesasAdministrativa.reduce(function(acum, atual){
            return acum + atual;
        })

        return somaDespesaAdministrativa;
    }

    defineDespesaAdministrativa(){
    let somaDosCustos = this.somaDespesaAdministrativa();
        if (somaDosCustos = 0) {
            return this.despesaAdministrativa = 0;
        } else {
            return this.despesaAdministrativa = this.somaDespesaAdministrativa();
        }
    }

    preencheTotalDespesaAdministrativa(){
        const inputDespesaAdministrativaTotal = document.querySelector('[data-inputResultado="total-administrativas"]');
        inputDespesaAdministrativaTotal.value = this.despesaAdministrativa;
    }
    
}