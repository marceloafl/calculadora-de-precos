export class CustoEstrutural {
    constructor(){
        this.custoEstrutural = this.defineCustoEstrutural();
    }

    validaEntrada(){
        const formCustoEstrutural = document.querySelector('[data-form="estruturais"]');
        const listaInputCustoEstrutural = formCustoEstrutural.querySelectorAll('[data-input]');
        const arrayInputEstrutural = Array.from(listaInputCustoEstrutural);

        const valoresCustoEstrutural = arrayInputEstrutural.map(function(input) {
            if(input.value.length <= 0) {
                return input.value = 0;
            } else {
                return parseFloat(input.value)
            }
        })

        return valoresCustoEstrutural;  
    }    

    somaCustoEstrutural(){
        const valoresCustoEstrutural = this.validaEntrada();
        const somaCustoEstrutural = valoresCustoEstrutural.reduce(function(acum, atual){
            return acum + atual;
        })

        return somaCustoEstrutural;
    }

    defineCustoEstrutural(){
    let somaDosCustos = this.somaCustoEstrutural();
        if (somaDosCustos = 0) {
            return this.custoEstrutural = 0;
        } else {
            return this.custoEstrutural = this.somaCustoEstrutural();
        }
    }

    preencheTotalCustoEstrutural(){
        const inputCustoEstruturalTotal = document.querySelector('[data-inputResultado="total-estruturais"]');
        inputCustoEstruturalTotal.value = this.custoEstrutural;
    }
    
}

