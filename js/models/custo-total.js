export class CustoTotal {
    custoTotal;

    constructor(fixo, variavel){
        this.custoTotal = fixo + variavel;
        return this.custoTotal;
    }
}