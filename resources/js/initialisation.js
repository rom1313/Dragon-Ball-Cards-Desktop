console.log('initialisation')
joueur = new Joueur('invité')
nomjoueur = joueur.pseudo

playlist.menu.home.play()


console.log(joueur);

genius.event("#jouer", "click", () => {
    joueurpremiertour = selectionjoueurpremiertour()
    game.scene.start("Combat", "Acceuil");
    playlist.menu.home.pause()
    playlist.combat.combat1.play()
   

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
        genius.timeursecondes('4', () => {
            actionadverse()
        })

    }

    majCarte(gokupetit)

    carteencoursjoueur = { ...gokupetit }
    majCarteadverse(chichi)
    cartencoursadverse = { ...chichi }
    animationtour()
    actionencours = false




})


let collection = [gokupetit]

console.log(gokupetit);