// INTERFACCIA

interface Ismartphone{
    
    carica:number // quantitativo di euro disponibile per le chiamate
    numeroChiamate:number // numero di chiamate effettuate
    costoMin:number // costo della chiamata al minuto
    ricarica(unaRicarica:number):void // ricarica il telefonino
    chiamata(minutiDurata:number):void // effettua una chiamata in minuti, aggiorna la carica disponibile, incrementa il numero di chiamate effettuate
    numero404():number // restituisce il valore della carica disponibile
    getNumeroChiamate():number // restituisce il valore della variabile "numeroChiamate"
    azzeraChiamate():void // azzera la variabile "numeroChiamate"

}

// CLASSI

class FirstUser implements Ismartphone{
    
    carica:number
    numeroChiamate:number = 0
    costoMin:number = 0.20

    constructor(carica:number){
        this.carica = carica
    }

    ricarica(unaRicarica:number):void{
        this.carica += unaRicarica
    }

    chiamata(minutiDurata:number):void{
        let costoChiamata = (minutiDurata * this.costoMin)
        this.carica = (this.carica -= costoChiamata)        
        this.numeroChiamate ++
    }

    numero404():number{        
        return this.carica
    }

    getNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0
    }

}

class SecondUser implements Ismartphone{

    carica:number
    numeroChiamate:number = 0
    costoMin:number = 0.20

    constructor(carica:number){        
        this.carica = carica        
    }

    ricarica(unaRicarica:number):void{        
        this.carica += unaRicarica
    }

    chiamata(minutiDurata:number):void{        
        let costoChiamata = (minutiDurata * this.costoMin)
        this.carica = (this.carica - costoChiamata)        
        this.numeroChiamate ++
    }

    numero404():number{        
        return this.carica
    }

    getNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0
    }

}

class ThirdUser implements Ismartphone{

    carica:number
    numeroChiamate:number = 0
    costoMin:number = 0.20

    constructor(carica:number){        
        this.carica = carica        
    }

    ricarica(unaRicarica:number):void{        
        this.carica += unaRicarica
    }

    chiamata(minutiDurata:number):void{        
        let costoChiamata = (minutiDurata * this.costoMin)
        this.carica = (this.carica - costoChiamata)        
        this.numeroChiamate ++
    }

    numero404():number{        
        return this.carica
    }

    getNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0
    }

}

// VERIFICARE IL SALDO RESIDUO DI OGNI UTENTE E QUANTE CHIAMATE SONO STATE EFFETTUATE

let u1:FirstUser = new FirstUser(5)
console.table(u1)
u1.ricarica(15)
u1.chiamata(15)
u1.getNumeroChiamate()   
console.log(`Dopo aver effettuato un numero di chiamate pari a ${u1.numeroChiamate}, u1 ha ancora ${u1.carica}€ di credito disponibile`)
console.log('-------------------------------------------------------------------------------------------')

let u2:SecondUser = new SecondUser(10)
console.table(u2)
u2.ricarica(10)
u2.chiamata(15)
u2.chiamata(5)
u2.getNumeroChiamate()
console.log(`Dopo aver effettuato un numero di chiamate pari a ${u2.numeroChiamate}, u2 ha ancora ${u2.carica}€ di credito disponibile`)
console.log('-------------------------------------------------------------------------------------------')

let u3:ThirdUser = new ThirdUser(15)
console.table(u3)
u3.ricarica(5)
u3.chiamata(5)
u3.chiamata(10)
u3.chiamata(15)
u3.getNumeroChiamate()
console.log(`Dopo aver effettuato un numero di chiamate pari a ${u3.numeroChiamate}, u3 ha ancora ${u3.carica}€ di credito disponibile`)
console.log('-------------------------------------------------------------------------------------------')