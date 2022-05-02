import { ProdutividadeController } from "../controllers/produtividade-controller.js";
import { Despesas } from "./despesas.js";

export class Produtividade extends Despesas {
    horasSemana;
    quantidadeFuncionarios;
    horasMes;
    tempoNaoOcioso = 0.8;
    produtividade;

    constructor(){
        super();
        this.produtividade = new ProdutividadeController().inputTotal.value;
    }

    calculaHorasMes(horasSemana, quantidadeFuncionarios){
        this.horasMes = horasSemana * quantidadeFuncionarios * 4;
        return this.horasMes;
    }

    calculaProdutividade(horasMes){
        this.produtividade = horasMes * this.tempoNaoOcioso;
        return this.produtividade;
    }
}


