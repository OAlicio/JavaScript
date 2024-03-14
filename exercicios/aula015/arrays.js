let valores = [1, 6, 12, 20]
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
console.log(`--------------------`)

for (let posi in valores) {
    console.log(`A posicao ${posi} tem o valor ${valores[posi]}`)
}