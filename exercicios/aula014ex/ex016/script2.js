function contar() {
    var res = document.querySelector('div#res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    res.innerHTML = ''

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossivel contar'        
        window.alert('[ERRO] Existem valores em branco, por favor preencha-os')
    //Quando nao desejamos que os valore estejam em branco    
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0){
            window.alert('[ERRO] passo 0?, Considerando passo 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            p;'=0'
            for(let c = i; c <= f; c += p){
            res.innerHTML += (`&#x1F449 ${c}`)
            }
        }else{
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
            res.innerHTML += (`&#x1F449 ${c}`)    
            }
        }
    }
    res.innerHTML += `&#x1F3C1`
}