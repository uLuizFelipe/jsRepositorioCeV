function reset() {
    var linhaResp = window.document.querySelector(`div#res`)
    linhaResp.innerHTML = `preencha os dados para verificar o resultado!`
}
function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var linhaResp = window.document.querySelector(`div#res`)
    var anoForm = Number(window.document.querySelector(`input#ano`).value)
    //window.alert(`o ano recolhido é ${anoForm}`)
    if (anoForm <= 1900) {
        linhaResp.innerHTML = `Essa pessoa n está mais vida`
    }
    else if (anoForm == 0 || anoForm > anoAtual) {
        window.alert(`insira uma data válida`)
        linhaResp.innerHTML = `Data não suportada pelo formulário`
    }
    else {
        var sexo = window.document.getElementsByName(`Sexo`)
        var genero = ``
        //window.alert(`até aqui foi`)
        if (sexo[0].checked) {
            genero = `Homem`
        }
        else {
            genero = `Mulher`
        }
        //window.alert(`até aqui foi2`)
        linhaResp.innerHTML = `Você é um ${genero} que tem ${anoAtual-anoForm} anos`
    }
}