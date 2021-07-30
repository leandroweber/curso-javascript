function gerar() {
    var txtNum = document.getElementById('txtNum')
    if (txtNum.value == ''){
        window.alert('Digite um número!')
    } else {
        var num = Number(txtNum.value)
        var sel = document.getElementById('sel')
        sel.innerHTML = ''
        var opt = ''
        var con = 1
        while (con <= 10) {
            opt = new Option(`${num} x ${con} = ${num*con}`, 'opc' + con)
            sel.add(opt) 
            con ++
        }
    }    
}