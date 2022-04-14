const secaoProdutividade = document.querySelector('[data-secao="produtividade"]');
const inputs = secaoProdutividade.querySelectorAll('[data-input]')

inputs.forEach(input => {
    input.addEventListener('change', () => {
        //const valorDoAtributo = input.dataset.tipo;
        exibeHorasMes();
        exibeInputResultado();
    })
})

function calculaHorasMes(){
    const inputHorasSemana = document.querySelector('[data-despesa="horas-semana"]');
    const inputQuantidadeFuncionarios = document.querySelector('[data-despesa="quantidade-funcionarios"]');

    const horasSemana = inputHorasSemana.value;
    const funcionarios = inputQuantidadeFuncionarios.value;
    const numeroDeSemanas = 4;

    let horasMes = (horasSemana * numeroDeSemanas) * funcionarios;
    return horasMes;
}

function exibeHorasMes(){
    const inputHorasMes = document.querySelector('[data-despesa="horas-mes"]');
    const horasMes = calculaHorasMes();
    inputHorasMes.value = horasMes;
}

export function calculaProdutividade(){
    const horasMes = calculaHorasMes();
    const horasNaoOciosas = 0.8;

    let produtividade = horasMes * horasNaoOciosas;
    return produtividade.toFixed(2);
}

function exibeInputResultado(){
    const inputResultado = document.querySelector('[data-total="produtividade"]');
    const produtividade = calculaProdutividade();
    inputResultado.value = produtividade;
}