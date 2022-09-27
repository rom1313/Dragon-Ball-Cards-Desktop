console.log('initialisation')
joueur = new Joueur('invité')
nomjoueur = joueur.pseudo

playlist.home.play()


console.log(joueur);

genius.event("#jouer", "click", () => {
    joueurpremiertour = selectionjoueurpremiertour()
    game.scene.start("Combat", "Acceuil");
    playlist.home.pause()
    playlist.combat1.play()

    dialogueactif = true
    dialogue('Que le combat commence !')



    genius.timeursecondes('3', () => {
        dialogue()

    })
    if (joueurpremiertour === nomjoueur) {
        document.querySelector("#carte").classList.add('cartebrille')
        joueurentraindejouer = nomjoueur

        console.log(`Le joueur en train de jouer est ${joueurentraindejouer}`);
    }
    else {
        joueurentraindejouer = nomadverse
        document.querySelector("#carte").classList.add('cartebrille')
        console.log(`Le joueur en train de jouer est ${joueurentraindejouer}`);

    }

    majCarte(gokupetit)
    majCarteadverse(chichi)
    animationtour()

    genius.intervallesecondes('6', changementtour)


})


let collection = [gokupetit]

console.log(gokupetit);