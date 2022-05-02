import { Produtividade } from "../models/produtividade.js";

export class ProdutividadeController {
    inputHorasSemana;
    inputQuantidadeFuncionarios;
    inputHorasMes;
    inputTempoOcioso;
    inputTotal;

    constructor(){
        this.inputHorasSemana = document.querySelector('[data-custo="horas-semana"]');
        this.inputQuantidadeFuncionarios = document.querySelector('[data-custo="quantidade-funcionarios"]');
        this.inputHorasMes = document.querySelector('[data-custo="horas-mes"]');
        this.inputTempoOcioso = document.querySelector('[data-custo="tempo-ocioso"]');
        this.inputTotal = document.querySelector('[data-total="produtividade"]');
    }

    calculaHorasMes(){
        const horasSemana = parseFloat(this.inputHorasSemana.value);
        const quantidadeFuncionarios = parseFloat(this.inputQuantidadeFuncionarios.value);
        const produtividade = new Produtividade();
        const horasMes = produtividade.calculaHorasMes(horasSemana, quantidadeFuncionarios);
        produtividade.exibeNoInput(this.inputHorasMes, horasMes);
        return produtividade;
    }

    calculaProdutividade(){
        const produtividade = this.calculaHorasMes();
        const horasMes = produtividade.horasMes;
        const total = produtividade.calculaProdutividade(horasMes);
        produtividade.exibeNoInput(this.inputTotal, total)
        return produtividade;
    }

}