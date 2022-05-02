export class Despesas {


    soma(...despesas){
        return despesas.reduce((acum, atual) => {
            return acum + atual;
        });
    }

    exibeNoInput(input, valor){
        input.value = valor.toFixed(2);
    }

    recuperaTotal(){
        return this.total;
    }

}