import { MateriaisController } from "../../controllers/material-controller.js";
import { Despesas } from "../despesas.js";

export class ListaMateriais extends Despesas {
    materiais = [];
    total = 0;

    constructor(valor){
        super();
        this.total = this.somaValores();
    }

    adiciona(material){
        this.materiais.push(material);
    }

    remove(material){
        this.materiais.splice(this.materiais.indexOf(material), 1);
    }

    somaValores(){
        const soma = this.materiais.reduce(function(acum, atual){
            return acum + atual;
        }, 0)
        this.total = soma;
        return soma;        
    }
}

