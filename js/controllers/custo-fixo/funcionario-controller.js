import { CustoFuncionario } from "../../models/custo-fixo/funcionario.js";
import { ValidadorDeEntradas } from "../../models/validador-entradas.js";
import { ValidacaoView } from "../../views/validacao-view.js";

export class FuncionarioController {
    inputSalario;
    inputFGTS;
    inputValeRefeicao;
    inputValeTransporte;
    inputBeneficios;
    inputOutros;
    inputTotal;
    mensagemView = new ValidacaoView('Por favor, insira um número maior ou igual a zero.');

    constructor(){
        this.inputSalario = document.querySelector('[data-custo="salario"]')
        this.inputFGTS = document.querySelector('[data-custo="fgts"]');
        this.inputValeRefeicao = document.querySelector('[data-custo="vale-refeicao"]');
        this.inputValeTransporte = document.querySelector('[data-custo="vale-transporte"]');
        this.inputBeneficios = document.querySelector('[data-custo="beneficios"]');
        this.inputOutros = document.querySelector('[data-custo="outros-funcionarios"]');
        this.inputTotal = document.querySelector('[data-resultado="funcionarios"]');
    }

    criaDespesa(input){
        if (!this.validaEntrada(input)){
            this.mensagemView.exibeMensagem(input);            
            return;
        }

        const salario = parseFloat(this.inputSalario.value);
        const fgts = parseFloat(this.inputFGTS.value);
        const valeRefeicao = parseFloat(this.inputValeRefeicao.value);
        const valeTransporte = parseFloat(this.inputValeTransporte.value);
        const beneficios = parseFloat(this.inputBeneficios.value);
        const outros = parseFloat(this.inputOutros.value);
        const custoFuncionario =  new CustoFuncionario(salario, fgts, valeRefeicao, valeTransporte, beneficios, outros);
        custoFuncionario.exibeNoInput(this.inputTotal, custoFuncionario.total)
        return custoFuncionario;
    }

    validaEntrada(input){
        const validador = new ValidadorDeEntradas();
        return validador.valorEhPositivo(input);
    }

}