import { recebeNomeEquipamento, calculaCustoEquipamento } from "./despesaEquipamentos.js";
import { recebeNomeMaterial, calculaCustoMaterial } from "./despesaMateriais.js";


const botoesAdicionar = document.querySelectorAll('[data-adicionar]');

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', event => {
        event.preventDefault();
        const botaoClicado = event.target;
        adicionaCustoNaTabela(botaoClicado);
    })
})

function criaTdNome(dado){
    const td = document.createElement('td');
    td.setAttribute('data-td', 'nome')
    td.textContent = dado;
    return td;
}

function criaTdValor(dado){
    const td = document.createElement('td');
    td.setAttribute('data-td', 'valor')
    td.textContent = dado;
    return td;
}

function criaDeletaTd(){
    const td = document.createElement('td');
    td.setAttribute('data-tr', 'deletar')
    td.classList.add('tabela--delete');
    return td;
}

function defineNome(botaoClicado){
    if(selecionaTipo(botaoClicado) === 'equipamento'){
        const nome = recebeNomeEquipamento();
        return nome;      
    }
    const nome = recebeNomeMaterial();
    return nome;    
}

export function defineCusto(botaoClicado){
    if(selecionaTipo(botaoClicado) === 'equipamento'){
        const custo = calculaCustoEquipamento();
        return custo;      
    }
    const custo = calculaCustoMaterial();
    return custo;
}

function criaTr(botaoClicado){
    const nome = defineNome(botaoClicado);
    const custo = defineCusto(botaoClicado);

    const despesaTr = document.createElement('tr');
    despesaTr.classList.add('tabela__despesa');
    despesaTr.setAttribute('data-tr', 'despesa');

    const nomeTd = criaTdNome(nome);
    const custoTd = criaTdValor(custo);
    const deletaTd = criaDeletaTd();

    despesaTr.appendChild(nomeTd);
    despesaTr.appendChild(custoTd);
    despesaTr.appendChild(deletaTd);

    return despesaTr;
}

function selecionaTipo(botaoClicado){
    const tipo = botaoClicado.dataset.adicionar;
    return tipo;
}

export function selecionaTabela(botaoClicado){
    if(selecionaTipo(botaoClicado) === 'equipamento'){
        const tabela = document.querySelector('[data-tabela="equipamento"]');
        return tabela;
    } else if (selecionaTipo(botaoClicado) === 'material'){
        const tabela = document.querySelector('[data-tabela="material"]');
        return tabela;
    }
}

function adicionaCustoNaTabela(botaoClicado){
    const tabela = selecionaTabela(botaoClicado);
    const despesaTr = criaTr(botaoClicado);
    tabela.appendChild(despesaTr);
}


