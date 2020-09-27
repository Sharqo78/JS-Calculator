
function calculs(){
let addition
let val1 = parseFloat(document.getElementById("valeur1").value);
let val2 = parseFloat(document.getElementById("valeur2").value);
addition = val1 + val2;
document.getElementById("resultAdd").textContent = "Addition : "  + addition;
soustraction = val1-val2;
document.getElementById("resultSub").textContent = "Soustraction : "  + soustraction;
multiplication = val1*val2;
document.getElementById("resultMult").textContent = "Multiplication : "  + multiplication;
division = val1/val2;
document.getElementById("resultDiv").textContent = "Division : "  +  division;
}

window.onload = function(){
    var button = document.getElementById('valider');
    button.form.submit();
}

