let res = document.getElementById('res')

function converter(){

    let nc = window.prompt('Digite uma temperatura em graus celsius(ºC)')
    if(nc.valueOf().length == 0){
        window.alert('[ERRO] VALOR NULO OU INCORRECTO')
        res.innerHTML += ``
    }else{
    res.innerHTML = ''    
    let nf = ((Number(nc).valueOf()/5)*9)+32
    let nk = Number(nc).valueOf() + 273
    res.innerHTML += `<h2>A temperatura de ${nc}ºC, corresponde a...</h2><p>${nk}ºK (Kelvin) </p><p> ${nf}ºF (Fahrenheit) </p>`
    }
}