// CLASSE ASTRATTA

abstract class Lavoratore {
    
    public codredd:number
    public redditoannuolordo:number
    public tasseinps:number
    public tasseirpef:number


    constructor(cod:number,red:number,tinps:number,tirpef:number){
        this.codredd = cod
        this.redditoannuolordo = red
        this.tasseinps = tinps
        this.tasseirpef = tirpef
    }
    
    getUtileTasse():number{
        let utileTasse = (this.redditoannuolordo * this.codredd) / 100
        return utileTasse
    }

    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnuoNetto():number
}

// CLASSI LAVORATORI

class Artigiano extends Lavoratore {

    getTasseInps():number{
        let tasseInps = (this.redditoannuolordo * this.tasseinps) / 100
        return tasseInps
    }

    getTasseIrpef():number{
        let tasseIrpef = (this.redditoannuolordo * this.tasseirpef) / 100
        return tasseIrpef
    }
    
    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
    }
}

class LiberoProfessionista extends Lavoratore {

    getTasseInps():number{
        let tasseInps = (this.redditoannuolordo * this.tasseinps) / 100
        return tasseInps
    }

    getTasseIrpef():number{
        let tasseIrpef = (this.redditoannuolordo * this.tasseirpef) / 100
        return tasseIrpef
    }
    
    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
    }

}

class Commerciante extends Lavoratore {

    getTasseInps():number{
        let tasseInps = (this.redditoannuolordo * this.tasseinps) / 100
        return tasseInps
    }

    getTasseIrpef():number{
        let tasseIrpef = (this.redditoannuolordo * this.tasseirpef) / 100
        return tasseIrpef
    }
    
    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
    }

}

// OUTPUT LAVORATORI

let l1 = new Artigiano(5, 10000, 10, 20);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

let l2 = new LiberoProfessionista(8, 20000, 13, 23);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

let l3 = new Commerciante(7, 25000, 12, 22);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');