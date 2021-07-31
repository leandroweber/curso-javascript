let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {  
    if (num.value == ''){
        window.alert('Digite um número!')
        return ''
    } 
    let n = Number(num.value)
    if (valores.indexOf(n) != -1) {
        window.alert('Número já existe na lista!')        
    } else if (n < 1 || n > 100) { 
        window.alert('Número deve estar entre 1 e 100')
    } else {
        res.innerHTML = ''        
        valores.push(n)   
        let opt = new Option(`Valor ${n} adicionado`, 'opc' + n)
        lista.add(opt) 
        //let item = document.createElement('option')
        //item.text = `Valor ${n} adicionado`
        //lista.appendChild(item)
    }
    num.value = ''
    num.focus()     
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
        return ''
    }
    let tot = valores.length 
    let soma = 0
    let menor = valores[0]
    let maior = valores[0]
    let media = 0
    for (let pos in valores) {
        soma += valores[pos]        
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    media = soma / tot
    res.innerHTML  = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O Maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}
