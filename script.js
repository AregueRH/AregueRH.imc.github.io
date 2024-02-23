let valeurTaille;
let valeurPoids;

document.getElementById("IDresultatCalcImc").value = "0";
document.getElementById("IDresultatSanteImc").value = "En attente de résultat...";

function leCalcul () {
     valeurImc = valeurPoids / Math.pow(valeurTaille, 2);  // Utilisation de Math.pow()
    return valeurImc;
}


document.getElementById("boutonCalculer").addEventListener("click", function () {
    valeurTaille = parseFloat(document.getElementById("IDvaleurTaille").value) / 100;
    valeurPoids = parseFloat(document.getElementById("IDvaleurPoids").value);
    
    leCalcul();

    document.getElementById("IDresultatCalcImc").value = valeurImc;

    if (valeurImc<18.5){
        document.getElementById("IDresultatSanteImc").value = "Vous êtes maigre";
    }
    else if (valeurImc<24.9) {
        document.getElementById("IDresultatSanteImc").value = "Vous êtes normal";  
    } 
    else if (valeurImc<29.9){
        document.getElementById("IDresultatSanteImc").value = "Vous êtes en surpoids";
    }   
    else if (valeurImc<40){
        document.getElementById("IDresultatSanteImc").value = "Vous êtes en obésité";
    }   
    else {
        document.getElementById("IDresultatSanteImc").value = "Vous êtes en obésité massive";
    }   
   
});

