export function recebeNomeMaterial(){
    const inputNome = document.querySelector('[data-nome="material"]');
    const nomeDaDespesa = inputNome.value;
    return nomeDaDespesa;      
}

function recebeValorMaterial(){
    const inputValor = document.querySelector('[data-valor="material"]');
    const valorDaDespesa = inputValor.value;
    return valorDaDespesa;
}

function recebeQuantidadeComprada(){
    const inputQuantidadeComprada = document.querySelector('[data-compra="material"]');
    const quantidadeComprada = inputQuantidadeComprada.value;
    return quantidadeComprada;
}

function recebeQuantidadeUsada(){
    const inputQuantidadeUsada = document.querySelector('[data-uso="material"]');
    const valorQuantidadeUsada = inputQuantidadeUsada.value;
    return valorQuantidadeUsada;
}
    

export function calculaCustoMaterial(){
    const valor = recebeValorMaterial();
    const quantidadeComprada = recebeQuantidadeComprada();
    const quantidadeUsada = recebeQuantidadeUsada();

    let custoPorFracao = valor / quantidadeComprada;
    let custo = custoPorFracao * quantidadeUsada;

    return custo.toFixed(2);
}

