
const botao = document.querySelector('[data-botao="custo-variavel-unitario"]');
botao.addEventListener('click',  () => {
    somaTds();
})

function recebeValoresTd(){
    const tabela = document.querySelector('[data-tabela="material"]');
    const tds = tabela.querySelectorAll('[data-td="valor"]');
    
    let valoresTds = [];
    tds.forEach(td => {
        valoresTds.push(parseFloat(td.innerHTML));
    })
    return valoresTds;
}


export function somaTds(){
    const valoresTds = recebeValoresTd();

    let somaTds = valoresTds.reduce(function(acum, atual){
        return acum + atual;
    })
    return somaTds;
}

/*
function recuperaValorTotal(){
    const inputTotal = document.querySelector('[data-resultado="material"]');

    let valorCustoVariavel = 0;

    if (inputTotal.value.length === 0){
        valorCustoVariavel = 0;
        return parseFloat(valorCustoVariavel);
    }
    valorCustoVariavel = parseFloat(inputTotal.value);
    return valorCustoVariavel;
}*/