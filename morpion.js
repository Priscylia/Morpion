function estValide(button) {
    return button.innerHTML.length == 0
}
function setSymbole(btn,Symbole) {
    btn.innerHTML = Symbole
}
function rechercherVainqueur(pions,joueurs,tour){
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[1].innerHTML == joueurs[tour] &&
        pions[2].innerHTML == joueurs[tour] 
    ) {
        pions[0].style.backgroundColor = "#ee82ee";
        pions[1].style.backgroundColor = "#ee82ee";
        pions[2].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[3].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] 
    ) {
        pions[3].style.backgroundColor = "#ee82ee";
        pions[4].style.backgroundColor = "#ee82ee";
        pions[5].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[6].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour] 
    ) {
        pions[6].style.backgroundColor = "#ee82ee";
        pions[7].style.backgroundColor = "#ee82ee";
        pions[8].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[3].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] 
    ) {
        pions[0].style.backgroundColor = "#ee82ee";
        pions[3].style.backgroundColor = "#ee82ee";
        pions[5].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[1].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour] 
    ) {
        pions[1].style.backgroundColor = "#ee82ee";
        pions[4].style.backgroundColor = "#ee82ee";
        pions[7].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour] 
    ) {
        pions[2].style.backgroundColor = "#ee82ee";
        pions[5].style.backgroundColor = "#ee82ee";
        pions[8].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour] 
    ) {
        pions[0].style.backgroundColor = "#ee82ee";
        pions[4].style.backgroundColor = "#ee82ee";
        pions[8].style.backgroundColor = "#ee82ee";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour] 
    ) {
        pions[2].style.backgroundColor = "#ee82ee";
        pions[4].style.backgroundColor = "#ee82ee";
        pions[6].style.backgroundColor = "#ee82ee";
        return true;
    }
}

function matchNul(pions){
    for(let i = 0, len = pions.length; i<len; i++){
        if (pions[i].innerHTML.length == 0) {
            return false;
        }
    }
    return true
}

let Afficheur = function(element) {
    let affichage = element;
    function setText(message) {
        affichage.innerHTML = message;
    }
    return {sendMessage:setText};
};

function main() {
    var pions = document.querySelectorAll('#jeu button')
    var joueurs = ["X", "O"];
    var tour = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector('#StatutJeu'));

    afficheur.sendMessage(
        "Le jeu peut commencer !<br>Joueur: " +
        joueurs[tour] + 
        " c'est votre tour !"
    );

    for (var i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener('click', function () {
        // pions[i].addEventListener('click', () => {
                if (jeuEstFini) return;
            if ( !estValide(this)){
                afficheur.sendMessage(
                    "C'est occupé, c'est toujours à vous !"
                );
            }else {
                setSymbole(this, joueurs[tour]);
                jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
                if (jeuEstFini) {
                    afficheur.sendMessage(
                        "le joueur " +
                        joueurs[tour] +
                        " a gagné "
                    );
                    return 
                }
                if (matchNul(pions)) {
                    afficheur.sendMessage(
                        "Match Nul !"
                    );
                    return
                }
                tour++;
                tour = tour%2;
                afficheur.sendMessage(
                    "Joueur "+joueur[tour]+" c'est à vous !"
                );
            }
        } );
    }
}
main();
//Pas d'incrémentation de tours