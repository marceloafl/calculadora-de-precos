import { CustoFixo } from "../../models/custo-fixo/custo-fixo.js";
import { CustoEstrutural } from "../../models/custo-fixo/estrutural.js";
import { ValidadorDeEntradas } from "../../models/validador-entradas.js";
import { ValidacaoView } from "../../views/validacao-view.js";

export class EstruturalController {
    inputAluguel;
    inputIPTU;
    inputEnergiaEletrica;
    inputAgua;
    inputOutros;
    inputTotal;
    mensagemView = new ValidacaoView('Por favor, insira um número maior ou igual a zero.');

    constructor(){
        this.inputAluguel = document.querySelector('[data-custo="aluguel"]')
        this.inputIPTU = document.querySelector('[data-custo="iptu"]');
        this.inputEnergiaEletrica = document.querySelector('[data-custo="energia"]');
        this.inputAgua = document.querySelector('[data-custo="agua"]');
        this.inputOutros = document.querySelector('[data-custo="outros-estruturais"]');
        this.inputTotal = document.querySelector('[data-resultado="estrutural"]');
    }

    criaDespesa(input){
        if (!this.validaEntrada(input)){
            this.mensagemView.exibeMensagem(input);
        }

        const aluguel = parseFloat(this.inputAluguel.value);
        const iptu = parseFloat(this.inputIPTU.value);
        const energiaEletrica = parseFloat(this.inputEnergiaEletrica.value);
        const agua = parseFloat(this.inputAgua.value);
        const outros = parseFloat(this.inputOutros.value);
        const custoEstrutural =  new CustoEstrutural(aluguel, iptu, energiaEletrica, agua, outros);
        custoEstrutural.exibeNoInput(this.inputTotal, custoEstrutural.total);
        return custoEstrutural.total;
    }

    validaEntrada(input){
        const validador = new ValidadorDeEntradas();
        return validador.valorEhPositivo(input);
    }

}