"use strict";
class SonAccount {
    constructor(saldo) {
        this.balanceInit = saldo;
    }
    oneDeposit(primoDeposito) {
        this.balanceInit = this.balanceInit + primoDeposito;
        return primoDeposito;
    }
    oneWithdraw(primoPrelievo) {
        this.balanceInit = this.balanceInit - primoPrelievo;
        return primoPrelievo;
    }
    twoDeposit(secondoDeposito) {
        this.balanceInit = this.balanceInit + secondoDeposito;
        return secondoDeposito;
    }
    twoWithdraw(secondoPrelievo) {
        this.balanceInit = this.balanceInit - secondoPrelievo;
        return secondoPrelievo;
    }
    totalBalance() {
        return this.balanceInit;
    }
}
console.log('------------son account----------------- ' + '\n');
// // set della proprietà al costruttore
let son = new SonAccount(0);
console.log(son);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.oneDeposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('deposit:+' + son.twoDeposit(900));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());
class MotherAccount {
    constructor(saldo) {
        this.balanceInit = saldo;
    }
    oneDeposit(primoDeposito) {
        this.balanceInit = this.balanceInit + primoDeposito;
        return primoDeposito;
    }
    oneWithdraw(primoPrelievo) {
        this.balanceInit = this.balanceInit - primoPrelievo;
        return primoPrelievo;
    }
    twoDeposit(secondoDeposito) {
        this.balanceInit = this.balanceInit + secondoDeposito;
        return secondoDeposito;
    }
    twoWithdraw(secondoPrelievo) {
        this.balanceInit = this.balanceInit - secondoPrelievo;
        return secondoPrelievo;
    }
    addInterest() {
        const interessi = 10;
        let saldoInteressi = ((this.balanceInit * interessi) / 100);
        return saldoInteressi;
    }
    totalBalance() {
        this.balanceInit = this.balanceInit - this.addInterest();
        return this.balanceInit;
    }
}
let mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.oneDeposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('deposit:+' + mother.twoDeposit(900));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
//# sourceMappingURL=script.js.map