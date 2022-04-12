export function recebeNomeEquipamento(){
    const inputNome = document.querySelector('[data-nome="equipamento"]');
    const nomeDaDespesa = inputNome.value;
    return nomeDaDespesa;      
}

function recebeValorEquipamento(){
    const inputValor = document.querySelector('[data-valor="equipamento"]')
    const valorDaDespesa = inputValor.value;
    return valorDaDespesa;
}

function recebeVidaUtil(){ 
    const inputVidaUtil = document.querySelector('[data-depreciacao="equipamento"]');  
    const valorDaVidaUtil = inputVidaUtil.value;
    return valorDaVidaUtil;
}

export function calculaCustoEquipamento(){
    const valor = recebeValorEquipamento();
    const vidaUtil = recebeVidaUtil();
    const meses = 12;

    let custo = (valor / vidaUtil) / meses;

    return custo.toFixed(2);
}



