import { selecionaElemento } from '../../elementos/selecionaElemento.js';

function defineTipoDaDespesa(atributo, valorDoAtributo){
    const tipoDeDespesa = selecionaElemento(true, atributo, valorDoAtributo);
    return tipoDeDespesa;
}

function criaListaDeValores(valorDoAtributo){
    const despesas = defineTipoDaDespesa('formulario', valorDoAtributo);
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

function somaValores(valorDoAtributo){
    let listaDeValores = criaListaDeValores(valorDoAtributo);

    let soma = 0;

    soma = listaDeValores.reduce(function(acum, atual){
        return acum + atual;
    }, soma)

    return soma;
}

export function exibeInputResultado(valorDoAtributo){
    const inputResultado = selecionaElemento(true, 'resultado', valorDoAtributo);
    let soma = somaValores(valorDoAtributo);

    inputResultado.value = soma.toFixed(2);
}

