const criaRelogio = ()=>{
    //criar uma função de data local.
    const getTimeZone = (segundos) =>{
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    //funcao para trocar de cor.
    const trocarCorBody = (cor)=>{
        document.body.style.backgroundColor = cor
    }
    
    //selecionar os elementos html.
    const relogio = document.querySelector('.relogio')
    /*const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')*/
    //cria-se uma variavel para iniciar o time no zero.
    let segundos = 0
    let timer;
    
    const inicieiContagem = () => {
         timer = setInterval(() =>{
            segundos++
            relogio.innerHTML = getTimeZone(segundos)
        }, 1000)
    }
    
    //juntar os eventos em um unico lugar.
    document.addEventListener('click', (e)=>{
        const el = e.target
    
        if(el.classList.contains('iniciar')){
            clearInterval(timer)//não dar conflito nos times.
            inicieiContagem()
            trocarCorBody("#00ff00")
        }
    
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            trocarCorBody("#ffff00")
            setTimeout(()=>{
                trocarCorBody("#FF0000")
            }, 2000)
        }
    
        if(el.classList.contains('zerar')){
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
    
    /*pegando os eventos.
    iniciar.addEventListener('click', (e) => {
       
    })
    
    pausar.addEventListener('click', (e) =>{
      
    })
    
    zerar.addEventListener('click', (e) =>{
       
    })*/
}
criaRelogio()