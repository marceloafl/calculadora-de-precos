import { criaMensagemDeErro } from './validacaoMensagem.js';

export function validaInputPorcentagem(input){
    let valorDeEntrada = input.value;

    if(input.dataset.input === 'porcentagem'){    
        if(input.value < 0 || input.value > 100){
            valorDeEntrada = 0;
            input.value = valorDeEntrada;
    
            criaMensagemDeErro('porcentagem', input);
            return parseFloat(valorDeEntrada);
        }
        return parseFloat(valorDeEntrada);
    }   
}




