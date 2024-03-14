function calcular(){
    let produto = window.prompt('Que produto você esta comprando?')
    let preco = window.prompt(`Qual o preço do ${produto}`)
    let dinheiro = window.prompt(`Quanto voce tem maos para pagar o ${produto}`)
    window.alert(`Voce comprou ${produto} que custou R$${preco}.
Voce deu R$${dinheiro} em dinheiro, e vai receber R$${dinheiro-preco} de troco
Volte sempre!`)
}