const Main = {
    //Evento responsavel por inicializar todos os outros eventos
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },
    //Evento responsavel por amarzenar os dados vindo do html em variaveis
    cacheSelectors: function(){
        this.checkButtons = document.querySelectorAll('.check')
    },
    //Evento responsavel por tratar todos eventos de click ou interação do teclado
    bindEvents: function(){
        const self = this

        this.checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })
    },
    //Atributos separados
    Events:{
        checkButton_click: function(){
            alert('ok')
        }
    }

}

Main.init()