import { CustoFixoUnitario } from "../models/custo-fixo-unitario.js";
import { CustoFixo } from "../models/custo-fixo/custo-fixo.js";
import { Produtividade } from "../models/produtividade.js";

export class CustoFixoUnitarioController {
    inputTempoDeExecucao;
    inputCustoFixoHora;
    inputCustoFixoMinuto;
    inputCustoFixoUnitario;

    constructor(){
        this.inputTempoDeExecucao = document.querySelector('[data-custo="tempo-necessario"]');
        this.inputCustoFixoHora = document.querySelector('[data-custo="custo-fixo-hora"]');
        this.inputCustoFixoMinuto = document.querySelector('[data-custo="custo-fixo-minuto"]');
        this.inputCustoFixoUnitario = document.querySelector('[data-total="custo-fixo-unitario"]');
    }

    criaCustoFixoUnitario(){
        this.custoFixoUnitario = new CustoFixoUnitario();
        return this.custoFixoUnitario;
    }

    calculaCustoFixoHora(){
        const custoFixo = new CustoFixo().total;
        const produtividade = new Produtividade().produtividade;
        const custoFixoUnitario = this.criaCustoFixoUnitario();
        const custoFixoHora = custoFixoUnitario.calculaCustoFixoHora(custoFixo, produtividade);
        custoFixoUnitario.exibeNoInput(this.inputCustoFixoHora, custoFixoHora);
        return custoFixoHora;
    }

    calculaCustoFixoMinuto(){
        const custoFixoUnitario = this.criaCustoFixoUnitario();
        const custoFixoHora = this.calculaCustoFixoHora();
        const custoFixoMinuto = custoFixoUnitario.calculaCustoFixoMinuto(custoFixoHora);
        custoFixoUnitario.exibeNoInput(this.inputCustoFixoMinuto, custoFixoMinuto);
        return custoFixoMinuto;
    }

    calculaCustoFixoUnitario(){
        const custoFixoUnitario = this.criaCustoFixoUnitario(); 
        const custoFixoMinuto = this.calculaCustoFixoMinuto();
        const tempoDeExecucao = this.inputTempoDeExecucao.value;
        const valorCustoFixoUnitario = custoFixoUnitario.calculaCustoFixoUnitario(custoFixoMinuto, tempoDeExecucao);
        custoFixoUnitario.exibeNoInput(this.inputCustoFixoUnitario, valorCustoFixoUnitario);        
        return valorCustoFixoUnitario;
    }
}