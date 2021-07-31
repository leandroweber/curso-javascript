let num = [5,8,2,9,3]
//adiciona campo no final do vetor/array
num.push(7)

console.log(`Noso vetor é o ${num}`)
console.log(num)
// conta quantos elemenyos no array
console.log(`Tamanho do array ${num.length}`)
// ordena elementos do array
console.log(`Array ordenado ${num.sort()}`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}