const Main = {
    //Evento responsavel por inicializar todos os outros eventos
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },
    //Evento responsavel por amarzenar os dados vindo do html em variaveis
    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },
    //Evento responsavel por tratar todos eventos de click ou interação do teclado
    bindEvents: function(){
        const self = this

        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })

        this.$inputTask.onkeypress = self.Events.inpuTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click
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
        },
        inpuTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if (key === 'Enter'){
                this.$list.innerHTML += `
                <li>
                    <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                </li>
                `
                e.target.value = ''
                this.cacheSelectors()
                this.bindEvents()
            }
                
        },
        removeButton_click: function(e){
            let li = e.target.parentElement
            li.classList.add('removed')

            setTimeout(function(){
                li.classList.add('hidden')
            },300)
        }
    }

}

Main.init()