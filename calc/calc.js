
function appendToDisplay(value) {
    console.log("caractere recu:", value)
    const display = document.getElementById('display');
    //console.log(display)
    display.value += value;
}

function calculer(){
    const a_calculer = document.getElementById('display');
    console.log("a_calculer", a_calculer)
    alert(eval(a_calculer.value));
}
