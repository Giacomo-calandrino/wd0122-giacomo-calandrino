// VARIABILI RANDOM E GIOCATORI

let nRandom:number = Math.floor(Math.random()*(100-1)+1)
console.log('Numero Random: '+nRandom)

let giocatore1:number = Math.floor(Math.random()*(100-1)+1)
console.log('Giocatore 1: '+giocatore1)

let giocatore2:number = Math.floor(Math.random()*(100-1)+1)
console.log('Giocatore 2: '+giocatore2)

// DIFFERENZE

let differenza1:number = Math.abs(nRandom - giocatore1)
console.log('Differenza G1: '+differenza1)

let differenza2:number = Math.abs(nRandom - giocatore2)
console.log('Differenza G2: '+differenza2)

// OUTPUT

if (giocatore1 == nRandom){
    alert('Il Giocatore 1 ha indovinato')
}
else if (giocatore2 == nRandom){
    alert('Il Giocatore 2 ha indovinato')
}
else if (differenza1 < differenza2){
    alert('Nessuno ha indovinato, ma il Giocatore 1 si è avvicinato di più')
}
else if (differenza1 > differenza2){
    alert('Nessuno ha indovinato, ma il Giocatore 2 si è avvicinato di più')
}