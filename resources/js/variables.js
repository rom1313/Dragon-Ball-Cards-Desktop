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
let carteencoursjoueur;
let cartencoursadverse;

let actionencours = true



// TODO -------------------------------- variable dom carte -------------------------------------
let menu = document.querySelector("#menu")
let carteatk = document.querySelector("#carteatk")
let cartedef = document.querySelector("#cartedef")
let cartepv = document.querySelector("#cartepv")
let cartespecial = document.querySelector("#cartespecial")
let cartedescription = document.querySelector("#cartedescription");
let cartecôte = document.querySelector("#cartecôte")
let cartenom = document.querySelector("#cartenom")
let carteimg = document.querySelector("#carteimg")
// TODO -------------------------------- variable dom carte adverse -------------------------------------
let carteatkadverse = document.querySelector("#carteatkadverse")
let cartedefadverse = document.querySelector("#cartedefadverse")
let cartepvadverse = document.querySelector("#cartepvadverse")
let cartespecialadverse = document.querySelector("#cartespecialadverse")
let cartedescriptionadverse = document.querySelector("#cartedescriptionadverse");
let cartecôteadverse = document.querySelector("#cartecôteadverse")
let cartenomadverse = document.querySelector("#cartenomadverse")
let carteimgadverse = document.querySelector("#carteimgadverse")

// TODO -------------------------------- indice aléatoire pour le premier tour -------------------------------------
let indice = genius.nbaleatoire(2)

// TODO -------------------------------- Playlist et Sons -------------------------------------
let playlist = {
    combat: {
        combat1: new Audio("son/combat1.mp3"),
        combat2: new Audio("son/combat2.mp3"),
        combat3: new Audio("son/combat3.mp3"),
        combat4: new Audio("son/combat4.mp3"),
        combat5: new Audio("son/combat5.mp3"),
        combat6: new Audio("son/combat6.mp3"),
        defaite: new Audio("son/defaite.mp3"),
    },
    menu: {
        home: new Audio("son/home.mp3"),


    }






}

function tchekplayliste(titre) {
    if (!titre.paused) {
        
        playlist[i]
    }
    else {

    }

}
// TODO -------------------------------- Fonctions -------------------------------------


// TODO --------------------------------  Maj Carte Joueur -------------------------------------
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
// TODO -------------------------------- Maj carte adverse  -------------------------------------

function majCarteadverse(carte) {
    menu.style.display = "none"
    cartecôteadverse.textContent = carte.côte
    carteatkadverse.textContent = carte.atk
    cartedefadverse.textContent = carte.def
    cartepvadverse.textContent = carte.pv
    cartespecialadverse.textContent = carte.special
    cartedescriptionadverse.textContent = carte.description
    cartenomadverse.textContent = carte.nom
    carteimgadverse.style.backgroundImage = `url(${carte.img})`
    carteimgadverse.style.animation = "apparition 1s ease alternate forwards"

}

// TODO -------------------------------- selection premier tour-------------------------------------

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


// TODO -------------------------------- Classe Joueur -------------------------------------

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

// TODO -------------------------------- class carte -------------------------------------

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