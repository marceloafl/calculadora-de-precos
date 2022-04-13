import { escondeTrInstrucao } from './escondeTh.js';

const tabelas = document.querySelectorAll('[data-tabela]');

tabelas.forEach(tabela => {
    tabela.addEventListener('click', function(event){

        const tdClidada = event.target;

        subtraiDespesa(tdClidada, event);
        exibeSoma(tdClidada, event);

        setInterval(function(){
            escondeTrInstrucao();
        }, 100);
    })
})

function deletaTr(event){
    if (event.target.dataset.tr === 'deletar'){
        event.target.parentNode.classList.add('fadeout');
        
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 100)            
    }
    return event.target;
}

function selecionaTabela(event){
    const tdExcluida = deletaTr(event);
    const trExcluida = tdExcluida.parentNode;
    const tabela = trExcluida.parentNode;
    return tabela;
}

function recebeAtributoDaTabela(event){
    const tabela = selecionaTabela(event);
    const atributo = tabela.dataset.tabela;
    return atributo;
}

function recebeValoresTd(event){
    const tabela = selecionaTabela(event);
    const tds = tabela.querySelectorAll('[data-td="valor"]');
    let valoresTds = [];
    tds.forEach(td => {
        valoresTds.push(parseFloat(td.innerHTML));
    })
    return valoresTds;
}

function somaTds(event){
    const valoresTds = recebeValoresTd(event);

    let somaTds = valoresTds.reduce(function(acum, atual){
        return acum + atual;
    })
    return somaTds;
}

function defineValorASerSubtraido(tdClidada){
    const tdComValor = tdClidada.previousSibling
    const valorASerSubtraido = tdComValor.innerHTML;
    return valorASerSubtraido;
}

function subtraiDespesa(tdClidada, event){
    const valorTotal = somaTds(event);
    const valorASerSubtraido = defineValorASerSubtraido(tdClidada);
    let valorFinal = valorTotal - valorASerSubtraido;
    return parseFloat(valorFinal);
}

function selecionaInput(event){
    
    if(recebeAtributoDaTabela(event) === 'equipamento'){
        const input = document.querySelector('[data-resultado="equipamentos"]');
        return input;
    } else if (recebeAtributoDaTabela(event) === 'material'){
        const input = document.querySelector('[data-resultado="materiais"]');
        return input;
    }
}

function exibeSoma(tdClidada, event){
    const input = selecionaInput(event);
    input.value = subtraiDespesa(tdClidada, event).toFixed(2);
}