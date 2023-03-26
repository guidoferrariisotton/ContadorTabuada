function calcular() {
    var finicio = document.getElementById('txtinicio')
    var ffim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (finicio.value.length == 0 || ffim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(finicio.value)
        let f = Number(ffim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo invalido.')
        }
        if (i < f) {
            //contagem progressiva
            for (let c = i; c <= f; c += p)
                res.innerHTML += ` ${c} \u{1F449}`
            } else {
                //contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }

                
        }res.innerHTML += `\u{1F3C1}`
    }
}