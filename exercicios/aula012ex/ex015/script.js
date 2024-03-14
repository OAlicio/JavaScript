function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0  || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            if (idade < 13){
                //Crianca
                img.setAttribute('src', '/aula12ex/img/Menino.png')
                genero = 'um Menino'
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '/aula12ex/img/JovemM.png')
                genero = 'um Adolescente'
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', '/aula12ex/img/Adulto.png')
                genero = 'um Homem'
            }else{
                //idoso
                img.setAttribute('src', '/aula12ex/img/Veio.png')
                genero = 'um senhor Idoso'
            }
        } else {

            if (idade < 10){
                //Crianca
                img.setAttribute('src', '/aula12ex/img/Menina.png')
                genero = 'uma Menina'
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '/aula12ex/img/JovemF.png')
                genero = 'uma Adolescente'
            }else if (idade < 50){
                //Adulta
                img.setAttribute('src', '/aula12ex/img/Adulta.png')
                genero = 'uma Mulher'
            }else{
                //idosa
                img.setAttribute('src', '/aula12ex/img/Veia.png')
                genero = 'uma senhora Mulher'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}