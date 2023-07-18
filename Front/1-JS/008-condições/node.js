var idade = 100
if (idade < 16) {
    console.log(`Não vota`)
}
else if (idade < 18) {
    var falta = 18 - idade
    console.log(`voto opcional, voce tem mais ${falta} anos até ser obrigado  votar`)
}
else if (idade < 65) {
    var falta = 65 - idade
    console.log(`voto obrigatório, voce tem mais ${falta} anos até poder não votar`)
}
else {
    var falta = idade - 65
    console.log(`voce não é obrigado  votar a ${falta} a anos`)
}