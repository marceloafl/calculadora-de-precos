import { CustoTotal } from "./custo-total.js";
import { Taxas } from "./taxas.js";
import { CustoFixoUnitario } from "./custo-fixo-unitario.js";
import { MateriaisController } from "../controllers/material-controller.js";
import { TaxasController } from "../controllers/taxas-controller.js";

export class CalculoFinal {
    custoFixo;
    custoVariavel;
    custoTotal;
    markUp;
    preco;

    constructor(input){
        this.custoFixo = parseFloat(new CustoFixoUnitario().custoFixoUnitario);
        this.custoVariavel = parseFloat(new MateriaisController().inputTotal.value);
        this.custoTotal = this.custoFixo + this.custoVariavel;
        this.markUp = new TaxasController().calculaMarkUp(input);
        //this.preco = this.custoTotal * this.markUp;
        this.preco = this.calculaPreco();
    }

    calculaPreco(){
        const preco = this.custoTotal * this.markUp;
        return preco;
    }
}