function defineDataAtributo(atributo){
    const atributoDoElemento = atributo;
    return atributoDoElemento;
}

function defineValorDataAtributo(valorDoAtributo){
    const valorDoAtributoElemento = valorDoAtributo;
    return valorDoAtributoElemento;    
}

export function montaDataAtributo(atributo, valorDoAtributo=true){

    const atributoDoElemento = defineDataAtributo(atributo);
    let dataAtributo = '';

    if(valorDoAtributo.length > 0){
        const valorDoAtributoElemento = defineValorDataAtributo(valorDoAtributo);
        dataAtributo = `[data-${atributoDoElemento}="${valorDoAtributoElemento}"]`;
    } else {
        dataAtributo = `[data-${atributoDoElemento}]`;
    }

    return dataAtributo; //retorna data atributo
}

export function selecionaElemento(elementoUnico, atributo, valorDoAtributo=true){

    let dataElemento = '';
    let elemento = ''

    if(elementoUnico === true || elementoUnico === false){

        if(elementoUnico === true) {
            dataElemento = montaDataAtributo(atributo, valorDoAtributo);
            elemento = document.querySelector(dataElemento); 
        } else {
            dataElemento = montaDataAtributo(atributo);
            elemento = document.querySelectorAll(dataElemento); 
        }             
    } else {
        console.error('Por favor, insira true ou false para o parâmetro elementoUnico.')
    }

    return elemento; //retorna o elemento
}



    



















