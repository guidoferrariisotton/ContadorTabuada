function tabuada() {
    let num = document.getElementById('num')
    let res = document.getElementById('restabuada')
    if (num.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        let numer = Number(num.value)
        let multiplicador = 1
        res.innerHTML = ''
        while (multiplicador <= 10) {
            let item = document.createElement('option')
            item.text = (`${numer} x ${multiplicador} = ${numer * multiplicador}`)
            item.value = `tab${multiplicador}` 
            res.appendChild(item) 
            multiplicador ++
        }
    }
}
/*let num = document.get ElementById('num')

res.innerHTML = 'Tabuada do Número'*/