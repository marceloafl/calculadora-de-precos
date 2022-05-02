export class MaterialView {

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
        const materialTr = document.createElement('tr');
        materialTr.setAttribute('data-tr', 'despesa');
    
        const nomeTd = this.criaTdNome(nome);
        const valorTd = this.criaTdValor(valor);
        const deletaTd = this.criaDeletaTd();
    
        materialTr.appendChild(nomeTd);
        materialTr.appendChild(valorTd);
        materialTr.appendChild(deletaTd);
    
        return materialTr;
    }

    adicionaMaterialNaTabela(nome, valor){
        const tabela = document.querySelector('[data-tabela="material"]');
        const materialTr = this.criaTr(nome, valor);
        tabela.appendChild(materialTr);
    }

    removeMaterialDaTabela(material){
        const tabela = document.querySelector('[data-tabela="material"]');
        material.remove(material);
    }

    exibeTotal(valor){
        const inputTotal = document.querySelector('[data-resultado="material"]');
        inputTotal.value = valor.toFixed(2);
    }
}


