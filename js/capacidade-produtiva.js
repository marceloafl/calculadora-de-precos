export class Produtividade {

        constructor() {
                this.tempoNaoOcioso = 0.8;
                this.qtdeSemanas = 4;
                this.horasMes = 0;
                this.produtividade = 0;
        }


        recebeHorasSemana() {
                const inputHorasTrabSemana = document.querySelector('[data-input="horas-semana"]');
                const valorHorasTrabSemana = parseFloat(inputHorasTrabSemana.value);
                return valorHorasTrabSemana;
        }

        recebeQtdeFuncionarios() {
                const inputQtdeFuncionarios = document.querySelector('[data-input="quantidade-funcionarios"]');
                const valorQtdeFuncionarios = parseInt(inputQtdeFuncionarios.value);
                return valorQtdeFuncionarios;
        }
        
        calculaHorasMes(){
                const valorHorasTrabSemana = this.recebeHorasSemana();
                const valorQtdeFuncionarios = this.recebeQtdeFuncionarios();
                const horasMes = (valorHorasTrabSemana * valorQtdeFuncionarios * this.qtdeSemanas).toFixed(2);
                return horasMes;
        }

        defineHorasMes() {
                this.horasMes = this.calculaHorasMes();
                return this.horasMes;
        }

        preencheInputHorasMes(){
                const inputHorasMes = document.querySelector('[data-input="horas-mes"]');
                inputHorasMes.value = this.defineHorasMes();
        }


        calculaProdutividade() {
                const produtividade = this.calculaHorasMes() * this.tempoNaoOcioso;
                return produtividade;
        }

        defineProdutividade() {
                this.produtividade = this.calculaProdutividade();
                return this.produtividade;
        }

        preencheInputProdutividade() {
                const inputProdutividadeFinal = document.querySelector('[data-resultado="produtividade"]');
                inputProdutividadeFinal.value = (this.defineProdutividade()).toFixed(2);
        }




}





