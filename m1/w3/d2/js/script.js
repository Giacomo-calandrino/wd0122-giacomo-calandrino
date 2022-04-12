var nome = 'Giacomo';
document.write( ' ' + nome );
console.log(nome);

let cognome = 'Calandrino';
document.write( ' ' + cognome );
console.log(cognome);

const eta = 28;
document.write( ' ' + eta );
console.log(eta);


nome = 'Mario';
document.write( ' ' + nome );
console.log(nome);

cognome = 'Rossi';
document.write( ' ' + cognome );
console.log(cognome);

/*
eta = 40;
document.write( ' ' + eta );
console.log(eta);
*/

//la console ci darà un errore dovuto al fatto che il valore di const, a differenza di var/let, non può essere cambiato.

var voto = 8;
/*voto = 4;*/
var promosso = voto >= 6;
var bocciato = voto <= 5;

if(promosso){
    document.write( ' il risultato del test è: ' + voto + ' promosso ')
    console.log(promosso)
}else if(bocciato){
    document.write( ' il risultato del test è: ' + voto + ' bocciato ')
    console.log(bocciato)
}

//in questo caso vediamo che la variabile "voto" se cambiata da 8 a 4, il risultato del nostro output cambierà come descritto in "if", la variabile booleana ci darà sempre "true" perchè in entrambi i casi abbiamo definito cosa visualizzare.

var a = 10;
var b = a;
var c = 5;
var d = 15;

var somma = a + b + c + d;
document.write( ' ' + somma);
console.log(somma);

var sottrazione = somma - c - b - a;
document.write( ' ' + sottrazione);
console.log(sottrazione);

//vediamo sul documento e nella console la somma e la sottrazione dei var, con risultato rispettivamente 40 e 15.