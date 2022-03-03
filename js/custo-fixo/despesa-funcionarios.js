export class DespesaFuncionarios {
    constructor(){
        this.despesaFuncionarios = this.defineDespesaFuncionarios();
    }

    validaEntrada(){
        const formDespesaFuncionarios = document.querySelector('[data-form="funcionarios"]');
        const listaInputDespesaFuncionarios = formDespesaFuncionarios.querySelectorAll('[data-input]');
        const arrayDespesaFuncionarios = Array.from(listaInputDespesaFuncionarios);

        const valoresDespesaFuncionarios = arrayDespesaFuncionarios.map(function(input) {
            if(input.value.length <= 0) {
                return input.value = 0;
            } else {
                return parseFloat(input.value)
            }
        })

        return valoresDespesaFuncionarios;  
    }    

    somaDespesaFuncionarios(){
        const valoresDespesaFuncionarios = this.validaEntrada();
        const somaDespesaFuncionarios = valoresDespesaFuncionarios.reduce(function(acum, atual){
            return acum + atual;
        })

        return somaDespesaFuncionarios;
    }

    defineDespesaFuncionarios(){
    let somaDosCustos = this.somaDespesaFuncionarios();
        if (somaDosCustos = 0) {
            return this.despesaFuncionarios = 0;
        } else {
            return this.despesaFuncionarios = this.somaDespesaFuncionarios();
        }
    }

    preencheTotalDespesaFuncionarios(){
        const inputDespesaFuncionariosTotal = document.querySelector('[data-inputResultado="total-funcionarios"]');
        inputDespesaFuncionariosTotal.value = this.despesaFuncionarios;
    }
    
}