export class CustoFixoUnitario {
    constructor() {
        this.custoFixoUnitario = 0;
        this.custoFixoMinuto = 0;
        this.custoFixoHora = 0;
    }

    formCustoFixoUnit = document.querySelector('[data-form="custo-fixo-unitario"]');



    calculaCustoFixoHora(custoFixo, produtividade) { //OK
        const valorCustoFixoHora = custoFixo / produtividade;
        this.custoFixoHora = valorCustoFixoHora;
        return valorCustoFixoHora;
    }

    preencheInputCustoFixoHora() {   //OK
        const inputCustoFixoHora = document.querySelector('[data-input="custo-fixo-hora"]');
        inputCustoFixoHora.value = (this.custoFixoHora).toFixed(2);
    }

    calculaCustoFixoMinuto(custoFixoHora) { //OK
        const valorCustoFixoMinuto = custoFixoHora / 60;

        this.custoFixoMinuto = valorCustoFixoMinuto;
        return valorCustoFixoMinuto;
    }

    preencheInputCustoFixoMinuto() {
        const inputCustoFixoMinuto = document.querySelector('[data-input="custo-fixo-minuto"]');
        inputCustoFixoMinuto.value = (this.custoFixoMinuto).toFixed(2);
    }

    recebeTempoDeExecucao() {
        const inputTempoDeExecucao = document.querySelector('[data-input="tempo-producao"]');
        const tempoDeExecucao = inputTempoDeExecucao.value;
        return tempoDeExecucao;
    }

    calculaCustoFixoUnitario(custoFixoMinuto, tempoDeExecucao) {
        const custoFixoUnitario = custoFixoMinuto * tempoDeExecucao;

        this.custoFixoUnitario = custoFixoUnitario;
        return custoFixoUnitario;
    }

    preencheInputCustoFixoUnitario() {
        const inputCustoFixoUnitarioTotal = document.querySelector('[data-resultado="custo-fixo-unitario"]');
        inputCustoFixoUnitarioTotal.value = (this.custoFixoUnitario).toFixed(2);
    }


}
