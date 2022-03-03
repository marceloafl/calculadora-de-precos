import { CustoEstrutural } from "./custo-fixo/custo-estrutural.js";
import { DespesaAdministrativa } from "./custo-fixo/despesa-administrativa.js";
import { DespesaEquipamentos } from "./custo-fixo/despesa-equipamentos.js";
import { DespesaFuncionarios } from "./custo-fixo/despesa-funcionarios.js";

export class CustoFixo {
    constructor() {
        this.custoEstrutural = 0;
        this.despesaAdministrativa = 0;
        this.despesaEquipamentos = 0;
        this.despesaFuncionarios = 0;
        this.custoFixo = 0;
    }


    // NÃO ESTÁ ATIVO
    validaValor() {
        const secaoCustoFixo = document.querySelector('[data-container="custo-fixo"]');
        const listaInputCustoFixo = secaoCustoFixo.querySelectorAll('[data-input]');
        const arrayListaInputCustoFixo = Array.from(listaInputCustoFixo);
    
        const valoresValidados = arrayListaInputCustoFixo.map(function(input) {
            if (input.value >= 0){
                return true;
            } else {
                return false;
            }
        })
        return valoresValidados;
    }

    
    calculaCustoFixo(){
        const custoFixo = this.custoEstrutural + this.despesaAdministrativa + this.despesaEquipamentos + this.despesaFuncionarios;
        return custoFixo;
    }

    defineCustoFixo(){
        this.custoFixo = this.calculaCustoFixo();
        return this.custoFixo;
    }

    preencheCustoFixo(){
        const inputCustoFixo = document.querySelector('[data-resultado="custo-fixo"]');
        inputCustoFixo.value = this.defineCustoFixo();
    }



    criaCustoEstrutural(){
        const custoEstrutural = new CustoEstrutural();
        return custoEstrutural;
    }

    preencheCustoEstrutural(){
        this.criaCustoEstrutural().preencheTotalCustoEstrutural();
    }

    defineCustoEstrutural(){
        return this.custoEstrutural = this.criaCustoEstrutural().custoEstrutural;
    }

    criaDespesaAdministrativa(){
        const despesaAdministrativa = new DespesaAdministrativa();
        return despesaAdministrativa;
    }

    preencheDespesaAdministrativa(){
        this.criaDespesaAdministrativa().preencheTotalDespesaAdministrativa();
    }

    defineDespesaAdministrativa(){
        return this.despesaAdministrativa = this.criaDespesaAdministrativa().despesaAdministrativa;
    }

    criaDespesaEquipamentos(){
        const despesaEquipamentos = new DespesaEquipamentos();
        return despesaEquipamentos;
    }

    preencheDespesaEquipamentos(){
        this.criaDespesaEquipamentos().preencheTotalDespesaEquipamentos();
    }

    defineDespesaEquipamentos(){
        return this.despesaEquipamentos = this.criaDespesaEquipamentos().despesaEquipamentos;
    }

    criaDespesaFuncionarios(){
        const despesaFuncinoarios = new DespesaFuncionarios();
        return despesaFuncinoarios;
    }

    preencheDespesaFuncionarios(){
        this.criaDespesaFuncionarios().preencheTotalDespesaFuncionarios();
    }

    defineDespesaFuncionarios(){
        return this.despesaFuncionarios = this.criaDespesaFuncionarios().despesaFuncionarios;
    } 

}






