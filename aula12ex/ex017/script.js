function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        msg.innerHTML += '<br>BOM DIA'
        document.body.style.background = '#e2cd9f'
        img.src = 'fotomanha.png'        
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<br>BOA TARDE'
        document.body.style.background = '#b9846f'
        img.src = 'fototarde.png'        
    } else {
    	msg.innerHTML += '<br>BOA NOITE'
        document.body.style.background = '#515154'
        img.src = 'fotonoite.png'              
    }
}