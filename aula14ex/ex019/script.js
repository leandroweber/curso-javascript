function contar() {
    var txtIni = document.getElementById('txtIni')
    var txtFim = document.getElementById('txtFim')
    var txtPas = document.getElementById('txtPas')
    var txtRes = document.querySelector('div#res')
    if (txtIni.value.length == 0 || 
        txtFim.value.length == 0 || 
        txtPas.value.length == 0) {
        txtRes.innerHTML = '<p>Impossível contar!</>'
    } else {
        var ini = Number(txtIni.value) 
        var fim = Number(txtFim.value)
        var pas = Number(txtPas.value)
        if (pas <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            pas = 1
        }
        var res = '<p>Contando:<br>'
        if (ini < fim) {
            // Crescente
            for (ini; ini <= fim; ini += pas) {
                res += `${ini} \u{1F449} `
            }
        } else {
            // Descrecente
            for (ini; ini >= fim; ini -= pas) {
                res += `${ini} \u{1F449} `
            }
        }        
        res += `\u{1F3C1} </p>`
        txtRes.innerHTML = res
    } 
    
}