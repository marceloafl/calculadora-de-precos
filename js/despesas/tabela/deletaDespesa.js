const tabelas = document.querySelectorAll('[data-tabela]');

tabelas.forEach(tabela => {
    tabela.addEventListener('click', function(event){
        if (event.target.dataset.tr === 'deletar'){
            event.target.parentNode.classList.add('fadeout');
            
            setTimeout(function(){
                event.target.parentNode.remove();
            }, 500)
        }
    })
})