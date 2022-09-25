const genius = $
let sceneActuelle;
let joueur;
let toucheclavier;
let camera;
let nomjoueur;
let nomadverse;
let dialogueactif = false
let joueurpremiertour;
let joueurentraindejouer;


let menu = document.querySelector("#menu")
let carteatk = document.querySelector("#carteatk")
let cartedef = document.querySelector("#cartedef")
let cartepv = document.querySelector("#cartepv")
let cartespecial = document.querySelector("#cartespecial")
let cartedescription = document.querySelector("#cartedescription");
let cartecôte = document.querySelector("#cartecôte")
let cartenom = document.querySelector("#cartenom")
let carteimg = document.querySelector("#carteimg")

let indice = genius.nbaleatoire(2)
let playlist = {
    home: new Audio("son/home.mp3"),
    combat1: new Audio("son/combat1.mp3"),
    combat2: new Audio("son/combat2.mp3"),
    combat3: new Audio("son/combat3.mp3"),
    combat4: new Audio("son/combat4.mp3"),
    combat5: new Audio("son/combat5.mp3"),
    combat6: new Audio("son/combat6.mp3"),
    defaite: new Audio("son/defaite.mp3"),



}
// TODO -------------------------------- Fonctions -------------------------------------

function majCarte(carte) {
    menu.style.display = "none"
    cartecôte.textContent = carte.côte
    carteatk.textContent = carte.atk
    cartedef.textContent = carte.def
    cartepv.textContent = carte.pv
    cartespecial.textContent = carte.special
    cartedescription.textContent = carte.description
    cartenom.textContent = carte.nom
    carteimg.style.backgroundImage = `url(${carte.img})`
    carteimg.style.animation = "apparition 1s ease alternate forwards"

}
function selectionjoueurpremiertour() {

    if (indice === 1) {
        joueurpremiertour = nomjoueur
        console.log('nb = 1');
        console.log(joueurpremiertour);
        return nomjoueur


    }
    else if (indice === 2) {
        joueurpremiertour = nomadverse
        console.log('nb = 2');
        console.log(joueurpremiertour);
        return nomadverse
    }

    return


}




class Joueur {

    constructor(pseudo) {
        this.pseudo = pseudo;
        this.argent = 0;
        this.sante = 0;
        this.attaque = 0;
        this.defense = 0;
        this.niveau = 1;
        this.xp = 0;
        this.pass = "0000";
        this.score = 0;
        this.inventaire = [];
        this.coffres = [];
        this.titre = ""
        this.progression = 0;
        this.img = "img/inviteface.png";
        this.messages = [""];
        this.gemmes = 0;
        this.amis = [""];
        this.tour = false



    }








}

class Carte {

    constructor(nom, atk, def, pv, special, côte, description, img) {
        this.nom = nom;
        this.pv = pv;
        this.atk = atk;
        this.def = def;
        this.special = special
        this.img = img;
        this.côte = côte;
        this.description = description



    }
}