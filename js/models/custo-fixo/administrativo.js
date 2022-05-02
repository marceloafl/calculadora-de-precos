import { Despesas } from "../despesas.js";

export class CustoAdministrativo extends Despesas {
    internet = 0;
    telefone = 0;
    marketing = 0;
    contabilidade = 0;
    outros = 0;
    total = 0;

    constructor(internet, telefone, marketing, contabilidade, outros){
        super();
        this.internet = internet;
        this.telefone = telefone;
        this.marketing = marketing;
        this.contabilidade = contabilidade;
        this.outros = outros;
        this.total = this.soma(this.internet, this.telefone, this.marketing, this.contabilidade, this.outros);
    }
}


