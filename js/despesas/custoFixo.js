import { Despesa } from './despesa.js';

export class CustoFixo extends Despesa {
    constructor(){
        super();
        this.despesasEstruturais = this.defineDespesasEstruturais('estruturais');
        this.despesasAdministrativas = this.defineDespesasAdministrativas('administrativas');
        this.despesasEquipamentos = 0;
        this.despesasFuncionarios = this.defineDespesasFuncionarios('funcionarios');
    }

    defineDespesasEstruturais(valorDoAtributo){
        this.despesasEstruturais = super.exibeInputResultado(valorDoAtributo);
    }

    defineDespesasAdministrativas(valorDoAtributo){
        this.despesasEstruturais = super.exibeInputResultado(valorDoAtributo);
    }

    defineDespesasEquipamentos(valorDoAtributo){
        this.despesasEstruturais = super.exibeInputResultado(valorDoAtributo);
    }

    defineDespesasFuncionarios(valorDoAtributo){
        this.despesasEstruturais = super.exibeInputResultado(valorDoAtributo);
    }

}




