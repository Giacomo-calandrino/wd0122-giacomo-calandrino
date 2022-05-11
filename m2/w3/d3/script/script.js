fetch("json/discografia.json")
.then(res => {
    console.log(res)
    return res.json()
})

// ESERCIZIO 1

let first = document.querySelector('#first')
let bottone1 = document.querySelector('#scrivi')
let bottone2 = document.querySelector('#cancella')

let titolo = document.querySelector('#titolo')

bottone1.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.setItem("nome", first.value)
    titolo.innerHTML = "Ciao " + localStorage.getItem('nome')
    
})
bottone2.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.clear()
    titolo.innerHTML = 'No data'
    first.value = ''
})

if(localStorage.getItem('nome') != undefined){
    titolo.innerHTML = "Ciao " + localStorage.getItem('nome')
}


// ESERCIZIO 2

let i = 0

if(sessionStorage.getItem('tempo')){
    i = sessionStorage.getItem('tempo')
}

setInterval(function(){
    i++
    sessionStorage.setItem('tempo', i)
    document.querySelector('#timer').innerHTML = i
},1000)
