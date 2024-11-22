const avanca = document.queryselectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.queryselector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')
        atual.classlist.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})
