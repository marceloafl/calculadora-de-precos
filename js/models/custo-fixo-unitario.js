import { CustoFixoUnitarioController } from "../controllers/custo-fixo-unitario-controller.js";
import { Despesas } from "./despesas.js";

export class CustoFixoUnitario extends Despesas {
    tempoDeExecucao;
    custoFixoHora;
    custoFixoMinuto;
    custoFixoUnitario;

    constructor(){
        super();
        this.custoFixoUnitario = new CustoFixoUnitarioController().inputCustoFixoUnitario.value;
    }

    calculaCustoFixoHora(custoFixo, produtividade){
        this.custoFixoHora = custoFixo / produtividade;
        //console.log(custoFixoHora);
        return this.custoFixoHora;
    }

    calculaCustoFixoMinuto(custoFixoHora){
        this.custoFixoMinuto = custoFixoHora / 60;
        //console.log(custoFixoMinuto);
        return this.custoFixoMinuto;
    }

    calculaCustoFixoUnitario(custoFixoMinuto, tempoDeExecucao){
        this.custoFixoUnitario = custoFixoMinuto * tempoDeExecucao;
        return this.custoFixoUnitario;
    }

}