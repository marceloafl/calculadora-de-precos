import { Material } from "../models/custo-variavel/material.js";
import { ListaMateriais } from "../models/custo-variavel/materiais.js";
import { MaterialView } from "../views/material-view.js";

export class MateriaisController {
    inputNome;
    inputValor;
    inputCompra;
    inputUso;
    inputTotal;
    botaoAdicionar;
    botaoRemover;
    materiais = new ListaMateriais();
    materiaisView = new MaterialView();

    constructor(){
        this.inputNome = document.querySelector('[data-nome="material"]');
        this.inputValor = document.querySelector('[data-valor="material"]');
        this.inputCompra = document.querySelector('[data-compra="material"]');
        this.inputUso = document.querySelector('[data-uso="material"]');
        this.inputTotal = document.querySelector('[data-resultado="material"]');
        this.botaoAdicionar = document.querySelector('[data-adicionar="material"]');
    }

    criaMaterial(){
        const nome = this.inputNome.value;
        const valor = parseFloat(this.inputValor.value);
        const compra = parseFloat(this.inputCompra.value);
        const uso  = parseFloat(this.inputUso.value);
        const material = new Material(nome, valor, compra, uso);
        this.materiais.adiciona(material.custoExecucao);
        return material;
    }

    adicionaNaTabela(){
        const material = this.criaMaterial();
        const nomeMaterial = material.nome;
        const custoMaterial = material.custoExecucao;
        this.materiaisView.adicionaMaterialNaTabela(nomeMaterial, custoMaterial);       
    }

    atualizaMateriais(target){
        if (target === this.botaoAdicionar){
            this.adicionaNaTabela();
        } else if(target.dataset.tr === 'deletar') {
            this.removeDaLista(target);
            this.removeDaTabela(target);
        }
        const soma = this.materiais.somaValores();
        this.materiaisView.exibeTotal(soma);
    }

    removeDaLista(target){
        const material = parseFloat(target.parentNode.textContent);
        this.materiais.remove(material);
    }

    removeDaTabela(target){
        const material = target.parentNode;
        this.materiaisView.removeMaterialDaTabela(material);
    }
}


