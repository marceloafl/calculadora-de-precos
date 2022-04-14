const secaoTaxas = document.querySelector('[data-secao="lucros-taxas"]');
const inputs = secaoTaxas.querySelectorAll('[data-input]');

function recuperaValores(){
    let valores = [];
    
    inputs.forEach(input => {
        if (input.value.length === 0){
            input.value = 0;
        }
        valores.push(parseFloat(input.value));
    })
    return valores; 
}

function somaValores(){
    const valores = recuperaValores();

    let soma = valores.reduce(function(acum, atual){
        return acum + atual;
    })
    return soma;
}

export function calculaMarkUp(){
    const soma = somaValores();
    const markUpCalculado = 100 / (100 - soma);
    const markUp = markUpCalculado.toFixed(3);
    return parseFloat(markUp);
}