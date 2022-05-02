export class ValidadorDeEntradas {

    valorEhPositivo(input){
        if (input.value < 0 ) {
            input.value = 0;
            return false;
        }
        return true;
    }

    valorEhPorcentagemValida(input){
        if (input.value > 100 || input.value < 0) {
            input.value = 0;
            return false;
        }
        return true;
    }

    zeraInputVazio(input){
        if (input.value.length == 0){
            input.value = 0;
        }
    }
}


