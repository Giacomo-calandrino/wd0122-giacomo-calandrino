"use strict";
// INTERFACCIA
// CLASSI
class FirstUser {
    constructor(carica) {
        this.numeroChiamate = 0;
        this.costoMin = 0.20;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * this.costoMin);
        this.carica = (this.carica -= costoChiamata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class SecondUser {
    constructor(carica) {
        this.numeroChiamate = 0;
        this.costoMin = 0.20;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * this.costoMin);
        this.carica = (this.carica - costoChiamata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class ThirdUser {
    constructor(carica) {
        this.numeroChiamate = 0;
        this.costoMin = 0.20;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costoChiamata = (minutiDurata * this.costoMin);
        this.carica = (this.carica - costoChiamata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// VERIFICARE IL SALDO RESIDUO DI OGNI UTENTE E QUANTE CHIAMATE SONO STATE EFFETTUATE
let u1 = new FirstUser(5);
console.table(u1);
u1.ricarica(15);
u1.chiamata(15);
u1.getNumeroChiamate();
console.log(`Dopo aver effettuato un numero di chiamate pari a ${u1.numeroChiamate}, u1 ha ancora ${u1.carica}€ di credito disponibile`);
console.log('-------------------------------------------------------------------------------------------');
let u2 = new SecondUser(10);
console.table(u2);
u2.ricarica(10);
u2.chiamata(15);
u2.chiamata(5);
u2.getNumeroChiamate();
console.log(`Dopo aver effettuato un numero di chiamate pari a ${u2.numeroChiamate}, u2 ha ancora ${u2.carica}€ di credito disponibile`);
console.log('-------------------------------------------------------------------------------------------');
let u3 = new ThirdUser(15);
console.table(u3);
u3.ricarica(5);
u3.chiamata(5);
u3.chiamata(10);
u3.chiamata(15);
u3.getNumeroChiamate();
console.log(`Dopo aver effettuato un numero di chiamate pari a ${u3.numeroChiamate}, u3 ha ancora ${u3.carica}€ di credito disponibile`);
console.log('-------------------------------------------------------------------------------------------');
//# sourceMappingURL=script.js.map