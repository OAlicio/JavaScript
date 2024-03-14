function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas` 
    if (hora >= 0 && hora < 12){
        //Dia
        img.src = '/aula12ex/img/Manha.png'
        document.body.style.background = '#fea14e'
        msg.innerHTML = 'Bom Dia'
    } else if (hora >= 12 && hora < 18){
        //Tarde
        img.src = '/aula12ex/img/Tarde.png'
        document.body.style.background = '#d47b55'
        msg.innerHTML = 'Boa Tarde'
    }else{
        //Noite
        img.src = '/aula12ex/img/Noite.png'
        document.body.style.background = '#043459'
        msg.innerHTML = 'Boa Noite'
    }
}
