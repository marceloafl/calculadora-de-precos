import { CustoFixo } from "./custo-fixo.js";
import { Produtividade } from "./capacidade-produtiva.js"
    
const custoFixo = new CustoFixo();
const produtividade = new Produtividade();


export class CustoFixoUnitario {
    constructor() {
        this.custoFixoHora = this.calculaCustoFixoHora();
        this.custoFixoMinuto = this.calculaCustoFixoMinuto();
        this.CustoFixoUnitario = 0;

    }

    calculaCustoFixoHora() {
        const custoFixoHora = custoFixo / produtividade;
        this.custoFixoHora = custoFixoHora;
        
        return custoFixoHora;
    }

    calculaCustoFixoMinuto() {
        const custoFixoMinuto = this.calculaCustoFixoHora / 60;
        this.custoFixoMinuto = custoFixoMinuto;
        return custoFixoMinuto;
    }

    escutaInputTempoProducao() {
        const formCustoFixoUnitario = document.querySelector('[data-form]');
        const inputTempoProducao = formCustoFixoUnitario.querySelector('[data-input="tempo-producao"]');

        inputTempoProducao.addEventListener('change', function(){
            console.log(inputTempoProducao);
        })
        

    }

    calculaCustoFixoUnitario() {


        let tempoProducao = inputTempoProducao.value;
        console.log(tempoProducao);

        
        
        
        
        
        //const custoFixoUnitario = this.calculaCustoFixoMinuto * 
    }


}


//const inputCustoFixoHora = formCustoFixoUnitario.querySelector('[data-input="custo-fixo-hora"]');
//const inputCustoFixoMinuto = formCustoFixoUnitario.querySelector('[data-input="custo-fixo-minuto"]');