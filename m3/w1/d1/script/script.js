// VARIABILI RANDOM E GIOCATORI
var nRandom = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Numero Random: ' + nRandom);
var giocatore1 = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Giocatore 1: ' + giocatore1);
var giocatore2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Giocatore 2: ' + giocatore2);
// DIFFERENZE
var differenza1 = Math.abs(nRandom - giocatore1);
console.log('Differenza G1: ' + differenza1);
var differenza2 = Math.abs(nRandom - giocatore2);
console.log('Differenza G2: ' + differenza2);
// OUTPUT
if (giocatore1 == nRandom) {
    alert('Il Giocatore 1 ha indovinato');
}
else if (giocatore2 == nRandom) {
    alert('Il Giocatore 2 ha indovinato');
}
else if (differenza1 < differenza2) {
    alert('Nessuno ha indovinato, ma il Giocatore 1 si è avvicinato di più');
}
else if (differenza1 > differenza2) {
    alert('Nessuno ha indovinato, ma il Giocatore 2 si è avvicinato di più');
}
