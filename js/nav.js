const listaContainer = document.querySelectorAll('[data-container]');



const btnCustoFixoProximo = document.querySelector('[data-button="custo-fixo"]');
const containerCustoFixo = document.querySelector('[data-container="custo-fixo"]');

btnCustoFixoProximo.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCapacidadeProdutiva.classList.remove("hide");
})





const btnCapacidadeProdutiva = document.querySelector('[data-button="capacidade-produtiva"]');
const btnVoltarCapacidadeProdutiva = document.querySelector('[data-button="voltar-capacidade-produtiva"]');
const containerCapacidadeProdutiva = document.querySelector('[data-container="capacidade-produtiva"]');

btnCapacidadeProdutiva.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCustoFixoUnitario.classList.remove("hide");
})


btnVoltarCapacidadeProdutiva.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCustoFixo.classList.remove("hide");
})





const btnCustoFixoUnitario = document.querySelector('[data-button="custo-fixo-unitario"]');
const btnVoltarCustoFixoUnitario = document.querySelector('[data-button="voltar-custo-fixo-unitario"]');
const containerCustoFixoUnitario = document.querySelector('[data-container="custo-fixo-unitario"]');

btnCustoFixoUnitario.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCustoVariavelUnitario.classList.remove("hide");
})

btnVoltarCustoFixoUnitario.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCapacidadeProdutiva.classList.remove("hide");
})





const btnCustoVariavelUnitario = document.querySelector('[data-button="custo-variavel-unitario"]');
const btnVoltarCustoVariavelUnitario = document.querySelector('[data-button="voltar-custo-variavel-unitario"]');
const containerCustoVariavelUnitario = document.querySelector('[data-container="custo-variavel-unitario"]');

btnCustoVariavelUnitario.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerLucrosTaxas.classList.remove("hide");
})

btnVoltarCustoVariavelUnitario.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCustoFixoUnitario.classList.remove("hide");
})





const btnLucrosTaxas = document.querySelector('[data-button="lucros-taxas"]');
const btnVoltarLucrosTaxas = document.querySelector('[data-button="voltar-lucros-taxas"]');
const containerLucrosTaxas = document.querySelector('[data-container="lucros-taxas"]');


btnLucrosTaxas.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerResultadoFinal.classList.remove("hide");
})

btnVoltarLucrosTaxas.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerCustoVariavelUnitario.classList.remove("hide");
})





const btnResultadoFinal = document.querySelector('[data-button="resultado-final"]');
const btnVoltarResultadoFinal = document.querySelector('[data-button="voltar-resultado-final"]');
const containerResultadoFinal = document.querySelector('[data-container="resultado-final"]');

btnResultadoFinal.addEventListener('click', function(){
    document.location.reload(true);
})

btnVoltarResultadoFinal.addEventListener('click', function(){
    listaContainer.forEach(function(container) {
        container.classList.add("hide");
    })

    containerLucrosTaxas.classList.remove("hide");
})

