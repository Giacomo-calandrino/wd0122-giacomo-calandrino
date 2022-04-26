let dataAttuale = new Date();
document.write(dataAttuale + '<br>');

// richiamo e scrivo sull'HTML la data attuale

let giorno = dataAttuale.getDate()
console.log(giorno)

let mese = dataAttuale.getMonth()
console.log(mese)

let anno = dataAttuale.getFullYear()
console.log(anno)

// mostro nella console gli elementi singoli della data

mese++
let dataEuropea = '<br>' + giorno + '/'+ 0 + mese + '/' + anno
document.write(dataEuropea)

// creo una variabile per la visualizzazione della data in formato europeo

function f(d){
    let g = d.getDate()
    
    /*let m = d.getMonth() + 1
    m = '0' + m
    m = m.slice(-2)*/

    let m = ('0' + (d.getMonth() + 1)).slice(-2)// versione compressa

    if(g <= 9){
        g = '0' + g
    }
    return g + '/' + m + '/' + d.getFullYear()
}

//let oggi = new Date(2020,3,5)

let fe = f(new Date(2020,3,5))
console.log(fe)