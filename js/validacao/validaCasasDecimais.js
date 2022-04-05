import { validaInputPositivo } from './validacaoPositivo.js';
import { validaInputPorcentagem } from './validacaoPorcentagem.js';

export function validaCasasDecimais(input){
    let valorDeEntrada = validaInputPositivo(input);

    if(input.dataset.input === 'porcentagem'){
        valorDeEntrada = validaInputPorcentagem(input);
        return valorDeEntrada.toFixed(2);
    }
    return valorDeEntrada.toFixed(2);
}


export function exibeValorNoInput(input){
    if (input.value.length > 0) {
        input.value = validaCasasDecimais(input);
    } else {
        input.value = 0;
    }

}