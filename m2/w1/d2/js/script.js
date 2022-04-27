function spesa(){

    let budget = 1000;
    
    while (budget > 0){

        let prezzi = Math.floor(Math.random()*100);

        if (prezzi <= budget){
            budget -= prezzi;
            document.querySelector('.budget').innerHTML += '<br> Spesa: € '+prezzi+'<br> Budget: € '+budget+'<br>';
        }

        if (budget <= 500 && budget + prezzi >= 500){
            document.querySelector('.budget').innerHTML += '<br>ATTENZIONE hai meno di 500€<br>';
        }

        if (budget < 100){
            document.querySelector('.budget').innerHTML += '<br>ATTENZIONE hai quasi speso tutto, FERMATI<br>';
            break;
        }
       
    }

}