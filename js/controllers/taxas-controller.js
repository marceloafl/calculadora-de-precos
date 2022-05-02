import { Taxas } from "../models/taxas.js";
import { ValidadorDeEntradas } from "../models/validador-entradas.js";
import { ValidacaoView } from "../views/validacao-view.js";

export class TaxasController {
    inputCartao;
    inputOutras;
    inputImpostos;
    inputLucro;
    mensagemView = new ValidacaoView('Por favor, insira um valor entre 0 e 100.');

    constructor(){
        this.inputCartao = document.querySelector('[data-custo="taxas-cartao"]');
        this.inputOutras = document.querySelector('[data-custo="outras-taxas"]');
        this.inputImpostos = document.querySelector('[data-custo="impostos"]');
        this.inputLucro = document.querySelector('[data-custo="margem-lucro"]');
    }

    calculaMarkUp(input){
        if (!this.validaEntrada(input)){
            this.mensagemView.exibeMensagem(input);
        }

        const cartao = parseFloat(this.inputCartao.value);
        const outras = parseFloat(this.inputOutras.value);
        const impostos = parseFloat(this.inputImpostos.value);
        const lucro = parseFloat(this.inputLucro.value);
        const markUp = new Taxas(cartao, outras, impostos, lucro).markUp;
        return markUp;
    }

    validaEntrada(input){
        const validador = new ValidadorDeEntradas();
        return validador.valorEhPorcentagemValida(input);
    }

}