import { Despesas } from "../../models/despesas.js";

export class CustoFixoController extends Despesas {
    inputEstrutural;
    inputAdministrativo;
    inputEquipamento;
    inputFuncionario;
    inputTotal;

    constructor(){
        super();
        this.inputEstrutural = document.querySelector('[data-resultado="estrutural"]');
        this.inputAdministrativo = document.querySelector('[data-resultado="administrativos"]');
        this.inputEquipamento = document.querySelector('[data-resultado="equipamento"]');
        this.inputFuncionario = document.querySelector('[data-resultado="funcionarios"]');
        this.inputTotal = document.querySelector('[data-total="custo-fixo"]');
    }

    exibeTotal(){
        const estrutural = parseFloat(this.inputEstrutural.value);
        const administrativo = parseFloat(this.inputAdministrativo.value);
        const equipamentos = parseFloat(this.inputEquipamento.value);
        const funcionarios = parseFloat(this.inputFuncionario.value);
        const total = (this.soma(estrutural, administrativo, equipamentos, funcionarios)).toFixed(2);
        this.inputTotal.value = total;
        return total;        
    }
}



