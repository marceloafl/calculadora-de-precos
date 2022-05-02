import { CustoAdministrativo } from "../../models/custo-fixo/administrativo.js"; 
import { ValidadorDeEntradas } from "../../models/validador-entradas.js";
import { ValidacaoView } from "../../views/validacao-view.js";

export class AdministrativoController {
    inputInternet;
    inputTelefone;
    inputMarketing;
    inputContabilidade;
    inputOutros;
    inputTotal;
    mensagemView = new ValidacaoView('Por favor, insira um número maior ou igual a zero.');

    constructor(){
        this.inputInternet = document.querySelector('[data-custo="internet"]')
        this.inputTelefone = document.querySelector('[data-custo="telefone"]');
        this.inputMarketing = document.querySelector('[data-custo="marketing"]');
        this.inputContabilidade = document.querySelector('[data-custo="contabilidade"]');
        this.inputOutros = document.querySelector('[data-custo="outros-administrativos"]');
        this.inputTotal = document.querySelector('[data-resultado="administrativos"]');
    }

    criaDespesa(input){
        if (!this.validaEntrada(input)){
            this.mensagemView.exibeMensagem(input);
            return;
        }

        const internet = parseFloat(this.inputInternet.value);
        const telefone = parseFloat(this.inputTelefone.value);
        const marketing = parseFloat(this.inputMarketing.value);
        const contabilidade = parseFloat(this.inputContabilidade.value);
        const outros = parseFloat(this.inputOutros.value);
        const custoAdministrativo =  new CustoAdministrativo(internet, telefone, marketing, contabilidade, outros);
        custoAdministrativo.exibeNoInput(this.inputTotal, custoAdministrativo.total)
        return custoAdministrativo;
    }

    validaEntrada(input){
        const validador = new ValidadorDeEntradas();
        return validador.valorEhPositivo(input);
    }

}