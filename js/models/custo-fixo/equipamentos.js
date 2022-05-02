import { Despesas } from "../despesas.js";

export class ListaEquipamentos extends Despesas {
    equipamentos = [];
    total = 0;

    constructor(valor){
        super();
        this.total = valor;
    }

    adiciona(equipamento){
        this.equipamentos.push(equipamento);
    }

    remove(equipamento){
        this.equipamentos.splice(this.equipamentos.indexOf(equipamento), 1);
    }

    somaValores(){
        const soma = this.equipamentos.reduce(function(acum, atual){
            return acum + atual;
        }, 0)
        return soma;        
    }
}
