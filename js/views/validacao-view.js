export class ValidacaoView {

    mensagem;

    constructor(mensagem){
        this.mensagem = mensagem;
    }

    defineMensagem(){
        const mensagemHTML = document.createElement('p');
        mensagemHTML.classList.add('input--erro');
        mensagemHTML.textContent = this.mensagem;
        return mensagemHTML;
    }

    exibeMensagem(input){
        const mensagem = this.defineMensagem();
        input.insertAdjacentElement('beforebegin', mensagem); 
        this.escondeMensagem(mensagem);
    }

    escondeMensagem(mensagem){
        setTimeout(function(){
            mensagem.remove();
        }, 4000);
    }
}