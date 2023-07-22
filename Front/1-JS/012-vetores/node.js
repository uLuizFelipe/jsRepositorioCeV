let num = [1,5,3,2,4,6]

/*
console.log(`Nosso vetor é o ${num}`)
console.log(num)
*/
//num[6] = 10
//console.log(num)
console.log(`Nosso vetor é o ${num}`)

//para adicionar na ultima posição
num.push(7)
console.log(`${num}`)

//para mostrar a largura do vetor
console.log(`${num.length}`)

//para organizar de forma crescente o vetor
//console.log(`${num.sort()}`)

//loop básico para mostrar um vetor
/*
for(let loop = 0;loop < num.length;loop++) {
    console.log(`o elemento na ${loop+1}° posição tem valor ${num[loop]}`)
}
*/

//código simplificado para loops em vetores
/*
for(let pos in num) {
    console.log(`o elemento na posição ${`pos`} tem valor ${num[pos]}`)
}
*/

//modo de procurar um valor dentro de um vetor
console.log(num.indexOf(5 ))//caso o valor n exista no vetor, será retornado o valor -1
