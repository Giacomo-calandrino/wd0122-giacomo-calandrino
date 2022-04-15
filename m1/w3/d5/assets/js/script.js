function cancella() {
    document.getElementById("risultato").value = "";
}

function display(value) {
    document.getElementById("risultato").value += value;
}

function calcola() {
    var p = document.getElementById("risultato").value;
    var q = eval(p);
    document.getElementById("risultato").value = q;
}