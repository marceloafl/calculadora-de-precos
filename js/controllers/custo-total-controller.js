import { CustoFixoUnitario } from "../models/custo-fixo-unitario.js";
import { MateriaisController } from "./material-controller.js";
import { CustoTotal } from "../models/custo-total.js"

export class CustoTotalController {

    defineCustoTotal(){
        const custoFixoUnitario = parseFloat(new CustoFixoUnitario().custoFixoUnitario);
        const custoVariavalUnitario = parseFloat(new MateriaisController().inputTotal.value);
        const custototal = new CustoTotal(custoFixoUnitario, custoVariavalUnitario);
        return custototal;
    }

}