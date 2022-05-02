export class Material {
    nome;
    valor;
    compra;
    uso;
    custoExecucao = 0;

    constructor(nome, valor, compra, uso){
        this.nome = nome;
        this.valor = valor;
        this.compra = compra;
        this.uso = uso;
        this.custoExecucao = this.calculaCusto();
    }

    calculaCusto(){
        if (this.valor == 0 || this.compra == 0 || this.uso == 0){
            this.custoExecucao = 0;
            return this.custoExecucao;
        }
        const custoPorFracao = this.valor / this.compra;
        this.custoExecucao = custoPorFracao * this.uso;
        return this.custoExecucao;
    }
}