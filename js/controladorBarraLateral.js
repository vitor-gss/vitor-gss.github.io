document.getElementById('toggleButton').addEventListener('click', function () {
    var menuLateral = document.querySelector('.menu-lateral');
    var main = document.querySelector('main')
    // var modoEscuro = document.querySelector('.modo-escuro')

    if(menuLateral.classList.contains("expandido")){ // se menu estiver expandido
        menuLateral.classList.remove('expandido');
        menuLateral.classList.toggle('retraido');

        main.classList.remove('main-ret')
        main.classList.toggle('main-exp')
        
        // modoEscuro.classList.remove('expandido')
        // modoEscuro.classList.toggle('retraido');
    }else{
        menuLateral.classList.remove('retraido');
        menuLateral.classList.toggle('expandido');
        
        
        main.classList.remove('main-exp')
        main.classList.toggle('main-ret')

        // modoEscuro.classList.remove('retraido')
        // modoEscuro.classList.toggle('expandido');
    }
});