
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
function effacer(){
        const display = document.getElementById('display');
display.value=""
}

function carre(){
    const display = document.getElementById('display');
    const valeur = display.value;
    console.log("valeur a carre:", valeur)
    const valeur_calculee = eval(valeur);
    const res_carre=valeur_calculee*valeur_calculee;
    display.value=res_carre;
}