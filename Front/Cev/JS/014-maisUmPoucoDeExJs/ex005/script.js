let vetor = []
let num = window.document.querySelector(`input#numForm`)
let linhaSelect = window.document.querySelector(`select#listaVetor`)
let linhaResultado = window.document.querySelector(`p#resultados`)

function adicionarSelect(n) {
    let select = document.createElement(`option`)
        select.text = `valor ${n}  adicionado`
            linhaSelect.appendChild(select)
}

function adicionar() {
    let n = Number(num.value)
        if (n.length == 0) {
            window.alert(`Insira um valor não nulo`)
        }
            else if(n < 1 || n > 100) {
                window.alert(`Esse valor não está dentro dos limites da lista`)
            }
                else if(vetor.indexOf(n) != -1) {
                    window.alert(`Esse valor já existe na lista`)
                }
                    else {
                        vetor.push(n)
                        adicionarSelect(n)
                    }
    num.value = ``
    num.focus()
}

function mostraMenor() {
    let elemento = vetor[0]
    let pos = 0
        for (let loop in vetor) {
            if (elemento > vetor[loop]) {
                elemento = vetor[loop]
                pos = loop
            }
        }
    return `O menor valor é ${elemento} e está na posição ${Number(pos)+1}`
}

function mostraMaior() {
    let elemento = vetor[0]
    let pos = 0
        for (let loop in vetor) {
            if (elemento < vetor[loop]) {
                elemento = vetor[loop]
                pos = loop
            }
        }
    return `O maior valor é ${elemento} e está na posição ${Number(pos)+1}`
}

function mostrarSomaEMedia() {
    let soma = 0
        for (let loop in vetor) {
            soma += vetor[loop]
        }
    return `A soma dos elementos do vetor é ${soma} e sua media é ${soma/(vetor.length)}`
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert(`A lista está vazia, impossivel finalizar`)
    }
        else {
            linhaResultado.innerHTML = ``
                linhaResultado.innerHTML += `O vetor possui tamanho ${vetor.length} `
                    linhaResultado.innerHTML +=`<br>`+mostraMenor()+`<br>`
                        linhaResultado.innerHTML += mostraMaior()+`<br>`
                            linhaResultado.innerHTML += mostrarSomaEMedia()+`<br>`           
        }
}