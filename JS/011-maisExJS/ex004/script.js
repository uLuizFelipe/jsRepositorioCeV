


function calcular() {
    var numeroForm = Number(window.document.querySelector(`input#numEntrada`).value)
    var linhaSoma = window.document.querySelector(`select#soma`)
    var linhaSub = window.document.querySelector(`select#subt`)
    var linhaMult = window.document.querySelector(`select#mult`)
    var linhaDiv = window.document.querySelector(`select#divi`)
        if (numeroForm.length == 0) {
            Window.alert(`Entrada não aceita, insira um valor valido!`)
        }
            else {      
                linhaSoma.innerHTML=``
                linhaSub.innerHTML=``
                linhaMult.innerHTML=``
                linhaDiv.innerHTML=``
                    for(var loopSoma = 1;loopSoma <= 10;loopSoma++) {
                        var item = document.createElement(`option`)
                        item.text = `${numeroForm} + ${loopSoma} = ${numeroForm+loopSoma}`
                        linhaSoma.appendChild(item)
                    }

                    for(var loopSub = 1;loopSub <= 10;loopSub++) {
                        var item = document.createElement(`option`)
                        item.text = `${numeroForm} - ${loopSub} = ${numeroForm-loopSub}`
                        linhaSub.appendChild(item)
                    }

                    for(var loopMult = 1;loopMult <= 10;loopMult++) {
                        var item = document.createElement(`option`)
                        item.text = `${numeroForm} * ${loopMult} = ${numeroForm*loopMult}`
                        linhaMult.appendChild(item)
                    }

                    for(var loopDiv = 1;loopDiv <= 10;loopDiv++) {
                        var item = document.createElement(`option`)
                        item.text = `${numeroForm} / ${loopDiv} = ${numeroForm/loopDiv}`
                        linhaDiv.appendChild(item)
                    }
            }
    
}