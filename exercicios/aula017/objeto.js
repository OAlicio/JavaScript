let amigo = {nome: 'Jose', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p //this, informa aquilo que sera pego no objeto
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

