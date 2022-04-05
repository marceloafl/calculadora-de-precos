import { selecionaElemento } from '../elementos/selecionaElemento.js';

export class Despesa {
    constructor(){

    }

    defineTipoDaDespesa(atributo, valorDoAtributo){
        const tipoDeDespesa = selecionaElemento(true, atributo, valorDoAtributo);
        return tipoDeDespesa;
    }

    criaListaDeValores(valorDoAtributo){
        const despesas = this.defineTipoDaDespesa('formulario', valorDoAtributo);
        const inputsDasDespesas =  despesas.querySelectorAll('[data-despesa]');

        let listaDeValores = [];

        inputsDasDespesas.forEach(input => {
            if(input.value.length <= 0){
                input.value = 0;
            }
            listaDeValores.push(parseFloat(input.value))
        })
        return listaDeValores;       
    }

    somaValores(valorDoAtributo){
        let listaDeValores = this.criaListaDeValores(valorDoAtributo);
        console.log(listaDeValores);

        let soma = 0;

        soma = listaDeValores.reduce(function(acum, atual){
            return acum + atual;
        }, soma)
        console.log(soma);
        return soma;
    }

    exibeInputResultado(valorDoAtributo){
        const inputResultado = selecionaElemento(true, 'resultado', valorDoAtributo);
        let soma = this.somaValores(valorDoAtributo);

        inputResultado.value = soma;
    }   
    
}




