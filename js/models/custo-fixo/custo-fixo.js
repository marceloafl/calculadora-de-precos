import { CustoFixoController } from "../../controllers/custo-fixo/custo-fixo-controller.js";
import { Despesas } from "../despesas.js";

export class CustoFixo extends Despesas {
    total;

    constructor(){
        super();
        this.total = new CustoFixoController().exibeTotal();
    }
}


