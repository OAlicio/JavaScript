let res = document.getElementById('res')
function converter(){
    document.getElementById('res').style.fontWeight = 'normal'
    res.innerHTML = ''
    let num = window.prompt('Digite uma distancia em metros(m)')
    let n = Number(num.valueOf())
    res.innerHTML += `<h2>A distancia de ${n} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${n/1000} quilometros (km)</p>`
    res.innerHTML += `<p>${n/100}  hectômetros (Hm)</p>`
    res.innerHTML += `<p>${n/10}   decâmetros  (Dam)</p>`
    res.innerHTML += `<p>${n*10}   decímetros  (dm)</p>`
    res.innerHTML += `<p>${n*100}  centímetros (cm)</p>`
    res.innerHTML += `<p>${n*1000} milímetros  (mm)</p>`
}