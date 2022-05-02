import { Despesas } from "../despesas.js";

export class Equipamento {
    nome;
    valor;
    vidaUtil;
    custoMes = 0;

    constructor(nome, valor, vidaUtil){
        this.nome = nome;
        this.valor = valor;
        this.vidaUtil = vidaUtil;
        this.custoMes = this.calculaCustoMes();
    }

    calculaCustoMes(){
        if (this.valor == 0 || this.vidaUtil == 0){
            this.custoMes = 0;
            return this.custoMes;
        }
        const custoAno = this.valor / this.vidaUtil;
        this.custoMes = custoAno / 12;
        return this.custoMes;
    }
}


