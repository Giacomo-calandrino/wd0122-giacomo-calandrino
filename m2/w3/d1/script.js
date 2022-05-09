let bottone = document.getElementsByTagName('button')


class Utenti{
    
    constructor(){

        this.nome = document.querySelector('.nome').value
        this.cognome = document.querySelector('.cognome').value
        this.data = document.querySelector('.data').value
        this.bottone = bottone

        this.bottone.addEventListener('click',() => {
            this.creaElementoLista()
        })

    }

}

creaElementoLista();{
    
    let dnome = document.createElement('div')
    dnome.innerHTML = this.nome.value
    this.nome = dnome

    this.nome.append(div)
        
    let dcognome = document.createElement('div')
    dcognome.innerHTML = this.cognome.value
    this.cognome = dcognome

    this.cognome.append(div)
    
    let ddata = document.createElement('div')
    ddata.innerHTML = this.data.value
    this.data = ddata

    this.data.append(div)

}

