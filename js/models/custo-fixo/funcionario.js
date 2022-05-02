import { Despesas } from "../despesas.js";

export class CustoFuncionario extends Despesas {
    salario = 0;
    fgts = 0;
    valeRefeicao = 0;
    valeTransporte = 0;
    beneficios = 0;
    outros = 0;
    total = 0;

    constructor(salario, fgts, valeRefeicao, valeTransporte, beneficios, outros){
        super();
        this.salario = salario;
        this.fgts = fgts;
        this.valeRefeicao = valeRefeicao;
        this.valeTransporte = valeTransporte;
        this.beneficios = beneficios;
        this.outros = outros;
        this.total = this.soma(this.salario, this.fgts, this.valeRefeicao, this.valeTransporte, this.beneficios, this.outros);
    }
}


