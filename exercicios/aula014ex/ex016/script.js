function contar() {
    var res = document.querySelector('div#res')
    var ini = Number(document.getElementById('txti').value)
    var fim= Number(document.getElementById('txtf').value)
    var passo = Number(document.getElementById('txtp').value)
    res.innerHTML = ''

    //Para que isso funcione eles nao podem ser convertidos em number
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('erro')

    } 

    if(passo > 0){

        if( fim > ini){
            for (ini = ini ; ini <= fim ; txti = passo + ini){
                res.innerHTML += `&#x1F449 ${ini}`
            } 
        } else {
            for (fim = fim ; fim <= ini ; ini = ini - passo){
                res.innerHTML += `&#x1F449 ${ini}`
            } 
        }

    } else if(passo < 1){
        passo = 1
        window.alert('[ERRO] Valor incorrecto, coxnsiderando passo 1')
        if( fim > ini){
            for (ini = ini ; ini <= fim ; ini = passo + ini){
                res.innerHTML += `&#x1F449 ${ini}`
            }
        } else {
            for (fim = fim ; fim <= ini ; ini = ini - passo){
                res.innerHTML += `&#x1F449 ${ini}`
            } 
        } 

    } 

    res.innerHTML +=' FIM'
}