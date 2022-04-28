function apriMenu() {
    document.querySelector('.finestra').classList.toggle('mostra')
}

let impegni = document.querySelectorAll('li');

for (var i = 0; i < impegni.length; i++) {

    impegni[i].addEventListener('mouseover', function() {
        this.classList.add('selezione')
    })

    impegni[i].addEventListener('mouseout', function() {
        this.classList.remove('selezione')
    })

    impegni[i].addEventListener('click', function() {
        this.classList.toggle('fatto')
    })
}