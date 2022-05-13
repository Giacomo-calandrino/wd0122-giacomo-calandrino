const APPURL = 'assets/json/users.json'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {           

    for(let utente of res){
                
        let tr = document.createElement('tr')
        tr.classList.add('row')

        let tdUser = document.createElement('td')
        tdUser.classList.add('col','pt-4')
        tdUser.innerHTML = utente.username

        let tdNome = document.createElement('td')
        tdNome.classList.add('col','pt-4')
        tdNome.innerHTML = utente.firstName
                
        let tdCognome = document.createElement('td')
        tdCognome.classList.add('col','pt-4')
        tdCognome.innerHTML = utente.lastName
        
        let tdMail = document.createElement('td')
        tdMail.classList.add('col','pt-4')
        tdMail.innerHTML = utente.email

        let tdSesso = document.createElement('td')
        tdSesso.classList.add('col-1','pt-4')
        tdSesso.innerHTML = utente.gender
                
        let tdFoto = document.createElement('td')
        tdFoto.classList.add('col-1','ps-3')
        tdFoto.innerHTML = `<img src="${utente.profileURL}" width=80px>`
                
                
        tr.append(tdUser,tdNome,tdCognome,tdMail,tdSesso,tdFoto)
        tabella.append(tr)
                
    }

})