function calcolaAnni(compleanno) {
    return 2022 - compleanno;
}

let giacomo = calcolaAnni(1993);
console.log(giacomo);

let carlo = calcolaAnni(1989);
console.log(carlo);

let alberto = calcolaAnni(2000);
console.log(alberto);

//in questo caso abbiamo impostato la funzione in modo da ottenere l'età delle variabili sottraendo alla data "2022" l'anno di nascita

let calcolaAnni2 = compleanno => 2022 - compleanno;

let giacomo2 = calcolaAnni2(1993);
console.log(giacomo2);

let carlo2 = calcolaAnni2(1989);
console.log(carlo2);

let alberto2 = calcolaAnni2(2000);
console.log(alberto2);

//stesso procedimento dell'esempio precedente ma questa volta utilizziamo la funzione a freccia "=>"

function sommaEta(a){

    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

let risultato = sommaEta(29)(33)(22)
console.log(risultato);

//in questo caso abbiamo inserito delle funzioni all'interno di altre per poi definire il loro contenuto e fare il calcolo richiesto, con risultato 84

let eta = 17;
let maggiorenne = eta >= 18
let minorenne = eta <= 17

if(maggiorenne){
    console.log('Sei maggiorenne')
}else if(minorenne){
    console.log('Sei minorenne')
}