export class Produtividade {

        constructor() {
                this.tempoNaoOcioso = 0.8;
                this.qtdeSemanas = 4;
                this.horasTrabMes = this.calculaHorasTrabMes();
                this.escutaInputHoras();
                this.escutaInputFuncionarios();
        }

        calculaHorasTrabMes() {
                const inputHorasTrabSemana = document.querySelector('[data-input="horas-semana"]');
                let valorHorasTrabSemana = parseFloat(inputHorasTrabSemana.value);

                const inputQtdeFuncionarios = document.querySelector('[data-input="quantidade-funcionarios"]');
                let valorQtdeFuncionarios = parseFloat(inputQtdeFuncionarios.value);
                let horasTrabMes = valorHorasTrabSemana * valorQtdeFuncionarios * this.qtdeSemanas;

                const inputHorasTrabMes = document.querySelector('[data-input="horas-mes"]');
                inputHorasTrabMes.value = horasTrabMes;
                return horasTrabMes;
        }

        calculaProdutividade() {
                let produtividade = this.calculaHorasTrabMes() * this.tempoNaoOcioso;

                const inputProdutividadeFinal = document.querySelector('[data-resultado="produtividade"]');
                inputProdutividadeFinal.value = produtividade;
                
                return produtividade;
        }

        escutaInputHoras() {
                const inputHorasTrabSemana = document.querySelector('[data-input="horas-semana"]');                
                inputHorasTrabSemana.addEventListener('change', () => {
                        this.calculaHorasTrabMes();
                        this.calculaProdutividade();
                })
        }            
        
        
        escutaInputFuncionarios() {
                const inputQtdeFuncionarios = document.querySelector('[data-input="quantidade-funcionarios"]');
                inputQtdeFuncionarios.addEventListener('change', () => {
                        this.calculaHorasTrabMes();
                        this.calculaProdutividade();
                })
        }
}





