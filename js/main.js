const Main = {
    //Evento responsavel por inicializar todos os outros eventos
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },
    //Evento responsavel por amarzenar os dados vindo do html em variaveis
    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
    },
    //Evento responsavel por tratar todos eventos de click ou interação do teclado
    bindEvents: function(){
        const self = this

        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })
    },
    //Atributos separados
    Events:{
        checkButton_click: function(e){
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            if (!isDone){
                return li.classList.add('done')
            }    
            
            li.classList.remove('done')
            
            
        }
    }

}

Main.init()