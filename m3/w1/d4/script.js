"use strict";
const APP = 'Abbigliamento.json';
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzo, prezzoiva, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzo;
        this.prezzoivainclusa = prezzoiva;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        let sconto = ((this.prezzoivainclusa * this.saldo) / 100);
        let saldoCapo = this.prezzoivainclusa - sconto;
        return saldoCapo;
    }
    getacquistocapo() {
        let prezzoscontato = (this.prezzoivainclusa - this.getsaldocapo());
        return prezzoscontato;
    }
}
fetch(APP).then(res => res.json()).then(res => {
    console.log(res);
    let vestiti = [];
    for (let a of res) {
        let vestito = new Abbigliamento(a.id, a.codprod, a.collezione, a.capo, a.modello, a.quantita, a.colore, a.prezzo, a.prezzoiva, a.disponibile, a.saldo);
        vestiti.push(vestito);
    }
    console.log(vestiti);
    for (let x of vestiti) {
        console.log('Lo sconto è di ' + x.getsaldocapo() + '€');
        console.log('Il capo scontato costa ' + x.getacquistocapo() + '€');
        console.log('---------------------------------------------');
    }
});
//# sourceMappingURL=script.js.map