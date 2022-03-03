export class DespesaEquipamentos {
    constructor(){
        this.despesaEquipamentos = this.defineDespesaEquipamentos();
    }

    validaEntrada(){
        const formDespesaEquipamentos = document.querySelector('[data-form="equipamentos"]');
        const listaInputDespesaEquipamentos = formDespesaEquipamentos.querySelectorAll('[data-input]');
        const arrayInputEquipamentos = Array.from(listaInputDespesaEquipamentos);

        const valoresDespesaEquipamentos = arrayInputEquipamentos.map(function(input) {
            if(input.value.length <= 0) {
                return input.value = 0;
            } else {
                return parseFloat(input.value)
            }
        })

        return valoresDespesaEquipamentos;  
    }    

    somaDespesaEquipamentos(){
        const valoresDespesaEquipamentos = this.validaEntrada();
        const somaDespesaEquipamentos = valoresDespesaEquipamentos.reduce(function(acum, atual){
            return acum + atual;
        })

        return somaDespesaEquipamentos;
    }

    defineDespesaEquipamentos(){
    let somaDosCustos = this.somaDespesaEquipamentos();
        if (somaDosCustos = 0) {
            return this.despesaEquipamentos = 0;
        } else {
            return this.despesaEquipamentos = this.somaDespesaEquipamentos();
        }
    }

    preencheTotalDespesaEquipamentos(){
        const inputDespesaEquipamentosTotal = document.querySelector('[data-inputResultado="total-equipamentos"]');
        inputDespesaEquipamentosTotal.value = this.despesaEquipamentos;
    }
    
}