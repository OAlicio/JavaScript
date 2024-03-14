function tabuada() {
    var c = 1
    var txtn = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var n = Number(txtn.value)
    tab.innerHTML = ''
    if (txtn.value.length == 0){
        window.alert('Valor incorrecto')
    }else {
        while(c <= 12){
            let item = document.createElement('option')
            var p = n * c
            item.text = ` ${n} x ${c} = ${p}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        } 
    }       
}
