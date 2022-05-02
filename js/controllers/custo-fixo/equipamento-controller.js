import { Equipamento } from "../../models/custo-fixo/equipamento.js";
import { ListaEquipamentos } from "../../models/custo-fixo/equipamentos.js";
import { EquipamentoView } from "../../views/equipamento-view.js";

export class EquipamentosController {
    inputNome;
    inputValor;
    inputVidaUtil;
    inputTotal;
    botaoAdicionar;
    botaoRemover;
    equipamentos = new ListaEquipamentos();
    equipamentosView = new EquipamentoView();

    constructor(){
        this.inputNome = document.querySelector('[data-nome="equipamento"]');
        this.inputValor = document.querySelector('[data-valor="equipamento"]');
        this.inputVidaUtil = document.querySelector('[data-depreciacao="equipamento"]');
        this.inputTotal = document.querySelector('[data-resultado="equipamento"]');
        this.botaoAdicionar = document.querySelector('[data-adicionar="equipamento"]');
    }

    criaEquipamento(){
        const nome = this.inputNome.value;
        const valor = parseFloat(this.inputValor.value);
        const vidaUtil = parseFloat(this.inputVidaUtil.value);
        const equipamento = new Equipamento(nome, valor, vidaUtil);
        this.equipamentos.adiciona(equipamento.custoMes);
        return equipamento;
    }

    adicionaNaTabela(){
        const equipamento = this.criaEquipamento();
        const nomeEquipamento = equipamento.nome;
        const custoMesEquipamento = equipamento.custoMes;
        this.equipamentosView.adicionaEquipamentoNaTabela(nomeEquipamento, custoMesEquipamento);
    }

    atualizaEquipamentos(target){
        if (target === this.botaoAdicionar){
            this.adicionaNaTabela();

        } else if(target.dataset.tr === 'deletar') {
            this.removeDaLista(target);
            this.removeDaTabela(target);
        }
        const soma = this.equipamentos.somaValores();
        this.equipamentosView.exibeTotal(soma);  
    }

    removeDaLista(target){
        const equipamento = parseFloat(target.parentNode.textContent);
        this.equipamentos.remove(equipamento);
    }

    removeDaTabela(target){
        const equipamento = target.parentNode;
        this.equipamentosView.removeEquipamentoDaTabela(equipamento);
    }
}


