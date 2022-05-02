import { Despesas } from "../despesas.js";


export class CustoEstrutural extends Despesas {
    aluguel = 0;
    iptu = 0;
    energiaEletrica = 0;
    agua = 0;
    outros = 0;
    total = 0;

    constructor(aluguel, iptu, energiaEletrica, agua, outros){
        super();
        this.aluguel = aluguel;
        this.iptu = iptu;
        this.energiaEletrica = energiaEletrica;
        this.agua = agua;
        this.outros = outros;
        this.total = this.soma(this.aluguel, this.iptu, this.energiaEletrica, this.agua, this.outros);
    }


}


