import { CustoTotal } from "../models/custo-total.js";
import { CalculoFinal } from "../models/final.js";

export class CalculoFinalController {
    inputFixo;
    inputVariavel;
    inputTotal;
    inputPreco;

    constructor(){
        this.inputFixo = document.querySelector('[data-final="custo-unitario-fixo"]');
        this.inputVariavel = document.querySelector('[data-final="custo-unitario-variavel"]');
        this.inputTotal = document.querySelector('[data-final="custo-unitario-total"]');
        this.inputPreco = document.querySelector('[data-final="resultado"]');
    }

    exibeResultado(input){
        const resultado = new CalculoFinal(input);
        this.inputFixo.value = (resultado.custoFixo).toFixed(2);
        this.inputVariavel.value = (resultado.custoVariavel).toFixed(2);
        this.inputTotal.value = (resultado.custoTotal).toFixed(2);
        this.inputPreco.value = (resultado.preco).toFixed(2);
    }
}