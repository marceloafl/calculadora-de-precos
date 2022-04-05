export function criaMensagemDeErro(tipo, input){

    let mensagem = document.createElement('p');

    if(tipo === 'numeroNegativo'){
        mensagem.textContent = 'Por favor, insira um número maior ou igual a zero.';

    } else if (tipo === 'porcentagem'){
        mensagem.textContent = 'Por favor, insira um número entre 0% e 100%.';
    }

    input.insertAdjacentElement('beforebegin',mensagem); 
    mensagem.classList.add('input--erro');

    setTimeout(() => {
        mensagem.remove();    
    }, 3000);
}