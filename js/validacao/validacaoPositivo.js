import { criaMensagemDeErro } from './validacaoMensagem.js'

export function validaInputPositivo(input){
    let valorDeEntrada = input.value;

    if (input.dataset.input !== 'porcentagem' && input.dataset.input !== 'nome'){
        if(input.value < 0){
            valorDeEntrada = 0;
            input.value = valorDeEntrada;

            criaMensagemDeErro('numeroNegativo', input);
            return parseFloat(valorDeEntrada);
        }
        return parseFloat(valorDeEntrada);
    }
}







