const tabelas = document.querySelectorAll('[data-tabela]');

export function escondeTrInstrucao(){
    tabelas.forEach(tabela => {
        const numeroDeTrs = recebeNumeroDeTrs(tabela);
        const trInstrucao = selecionaTr(tabela);
        
        if (numeroDeTrs !== 0){
            trInstrucao.classList.add('invisivel');
        } else {
            trInstrucao.classList.remove('invisivel');
        }
    })
}

function selecionaTabela(tabela){
    if (tabela.dataset.tabela === 'equipamento'){
        const tabela = document.querySelector('[data-tabela="equipamento"]');
        return tabela;
    } else if (tabela.dataset.tabela === 'material'){
        const tabela = document.querySelector('[data-tabela="material"]');
        return tabela;
    }
}

function recebeNumeroDeTrs(tabela){
    const tabelaSelecionada = selecionaTabela(tabela);
    const trs = tabelaSelecionada.querySelectorAll('[data-tr="despesa"]');

    const numeroDeTrs = trs.length;
    return numeroDeTrs;
}

function selecionaTr(tabela){
    const tabelaSelecionada = selecionaTabela(tabela);
    const trInstrucao = tabelaSelecionada.querySelector('[data-instrucao]');
    return trInstrucao;
}

