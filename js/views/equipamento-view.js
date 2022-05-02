export class EquipamentoView {

    criaTdNome(nome){
        const td = document.createElement('td');
        td.setAttribute('data-td', 'nome')
        td.textContent = nome;
        return td;
    }
    
    criaTdValor(valor){
        const td = document.createElement('td');
        td.setAttribute('data-td', 'valor')
        td.classList.add('td--valor')
        td.textContent = valor.toFixed(2);
        return td;
    }
    
    criaDeletaTd(){
        const td = document.createElement('td');
        td.setAttribute('data-tr', 'deletar')
        td.classList.add('tabela--delete');
        return td;
    }

    criaTr(nome, valor){    
        const equipamentoTr = document.createElement('tr');
        equipamentoTr.setAttribute('data-tr', 'despesa');
    
        const nomeTd = this.criaTdNome(nome);
        const valorTd = this.criaTdValor(valor);
        const deletaTd = this.criaDeletaTd();
    
        equipamentoTr.appendChild(nomeTd);
        equipamentoTr.appendChild(valorTd);
        equipamentoTr.appendChild(deletaTd);
    
        return equipamentoTr;
    }

    adicionaEquipamentoNaTabela(nome, valor){
        const tabela = document.querySelector('[data-tabela="equipamento"]');
        const equipamentoTr = this.criaTr(nome, valor);
        tabela.appendChild(equipamentoTr);
    }

    removeEquipamentoDaTabela(equipamento){
        const tabela = document.querySelector('[data-tabela="equipamento"]');
        equipamento.remove(equipamento);
    }

    exibeTotal(valor){
        const inputTotal = document.querySelector('[data-resultado="equipamento"]');
        inputTotal.value = valor.toFixed(2);
    }
}


