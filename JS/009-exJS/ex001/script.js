function load() {
    var hora = 2;
    var msg = window.document.querySelector(`div#msg`)
    var img = window.document.querySelector(`div#foto`)
    var data = new Date()
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 11) {
        //img.src = `fotomanha.png`
        document.body.style.background = `yellow`
    }
    else if (hora >=11 && hora <= 19) {
        //img.src = `fototarde.png`
        document.body.style.background = `brown`
    }
    else {
        //img.src = `fotonoite.png`
        document.body.style.background = `gray`
    }
}