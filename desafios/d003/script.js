function calcular(){
    let num = window.prompt('Digite um numero inteiro qualquer')
    let n = Number(num.valueOf())
    window.alert(`Antes de ${n}, temos o numero ${n-1}
Depois de ${n}, temos o numero ${n+1}`)
}