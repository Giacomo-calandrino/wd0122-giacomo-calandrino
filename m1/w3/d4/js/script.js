let frase = 'Ciao a tutti mi chiamo Giacomo';

let fraseMaiusc = frase.toUpperCase();
let fraseMinusc = frase.toLowerCase();

console.log(frase);
console.log(fraseMaiusc);
console.log(fraseMinusc);

// tramite "toUpperCase" e "toLowerCase" possiamo rendere tutto il testo della stringa rispettivamente maiuscolo o minuscolo

let split = frase.split(" ");
console.log(split);

let parola1 = split[0];
let parola2 = split[5];
console.log(parola1);
console.log(parola2);
let parole = parola1.concat(' ', parola2);
document.write(parole);
console.log(parole);

// usiamo "frase.split" per dividere gli elementi della stringa in elementi di un array, poi selezioniamo due specifiche parole alle righe 15 e 16, per poi concatenarle alla righa 19

let persone = ['Giacomo','Francesco','Giorgio','Roberto','Davide']
console.log(persone);
let persona = persone[2];
console.log(persona);

// ho creato un array contenente 5 persone per poi estrarre il nome della terza e visualizzarlo sulla console

let persone2 = ['Giacomo','Francesco','Giorgio','Roberto','Davide']

let pop = persone2.pop()
console.log(persone2)
console.log(persone2.length)

let push = persone2.push('Michele')
console.log(persone2)
console.log(persone2.length)

let shift = persone2.shift()
console.log(persone2)
console.log(persone2.length)

let unshift = persone2.unshift('Flavio')
console.log(persone2)
console.log(persone2.length)

// qui usiamo pop/push e shift/unshift per aggiungere o eliminare degli elementi dall'array, verificando la lunghezza dopo ogni operazione

function calcolo(){
    let numeri = [20, 15, 5, 10, 25, 30];
        return  numeri[5] / 2 - numeri[1] * 2;
}
console.log(calcolo())

// creo una funzione con all'interno un array per poi fare un calcolo tra i suoi valori
