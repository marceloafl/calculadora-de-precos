export class Taxas {
    cartao;
    outras;
    impostos;
    lucro;
    markUp;

    constructor(cartao, outras, impostos, lucro){
        this.cartao = cartao;
        this.outras = outras;
        this.impostos = impostos;
        this.lucro = lucro;
        this.markUp = this.calculaMarkUp(cartao, outras, impostos, lucro);
    }

    somaTaxas(cartao, outras, impostos, lucro){
        return cartao + outras + impostos + lucro;
    }

    calculaMarkUp(cartao, outras, impostos, lucro){
        const markUp = 100 / (100 - this.somaTaxas(cartao, outras, impostos, lucro));
        return markUp;
    }
}