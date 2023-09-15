function calcular () {
    var descrição = window.document.querySelector(`p#descrição`)
    var linha = window.document.querySelector(`p#resultado`)

    var inicio = Number(window.document.querySelector(`input#inicio`).value)
        if (inicio.length == 0) {
            window.alert(`Insira um valor valido para inicio!`)
            linha.innerHTML += ``
        }
        else {
            var final = Number(window.document.querySelector(`input#final`).value)
            if (final.length == 0) {
                window.alert(`Insira um valor valido para final!`)
                linha.innerHTML += ``
            }
                else {
                    if (inicio == final) {
                        descrição.innerHTML = `o passeio não pode ocorrer pois você já está no destino`
                        linha.innerHTML = ``
                    }
                        else {
                            var invert = 0
                            if (inicio>final) {
                                var aux = final
                                final = inicio
                                inicio = aux
                                invert = 1
                            }
                                if (final - inicio < 100) {
                                    descrição.innerHTML = `O passeio é curto`
                                }
                                    else if (final - inicio < 250) {
                                        descrição.innerHTML = `O passeio será interessante`
                                    }
                                        else {
                                            descrição.innerHTML = `O passeio será longinguo`
                                        }
                            var passada = Number(window.document.querySelector(`input#passos`).value)
                                if (passada == 0 || passada.length == 0) {
                                    window.alert(`Insira um valor valido para passada!`)
                                    descrição.innerHTML += ` e nunca terá fim com essa passada`
                                    linha.innerHTML += ``
                                }
                                    else {
                                        linha.innerHTML =``
                                        if (inicio+passada >= final) {
                                            descrição.innerHTML += ` e terminará extremamente rápido`
                                            linha.innerHTML += ``
                                        }
                                            else {
                                                var passos = (final-inicio)/passada
                                                    descrição.innerHTML += ` e terminará em ${passos} passos`

                                                if (invert == 1) {
                                                    for (var loop = passos; loop > 0;loop--){
                                                        linha.innerHTML += `${passada*loop+inicio} `
                                                            if (passada*loop <= final) {
                                                                linha.innerHTML += String.fromCodePoint(0x1F449);
                                                            }
                                                    }
                                                        if (passada*loop <= final) {
                                                            linha.innerHTML += `${inicio+passada*loop}`+String.fromCodePoint(0x1F64C);
                                                        }
                                                            else {
                                                                linha.innerHTML += String.fromCodePoint(0x1F64C);
                                                            }
                                                }
                                                    else {
                                                        for (var loop = 0; loop < passos;loop++){
                                                            linha.innerHTML += `${inicio+passada*loop} `
                                                                if (inicio+passada*(loop+1) <= final) {
                                                                    linha.innerHTML += String.fromCodePoint(0x1F449);
                                                               }
                                                        } 
                                                            if (inicio+passada*loop <= final) {
                                                                linha.innerHTML += `${inicio+passada*loop}`+String.fromCodePoint(0x1F64C);
                                                            }
                                                                else {
                                                                    linha.innerHTML += String.fromCodePoint(0x1F64C);
                                                                }
                                                    }
                                            }
                                    }
                        }
                }
        }
}