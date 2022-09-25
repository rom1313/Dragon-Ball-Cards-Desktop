console.log('initialisation')
joueur = new Joueur('invité')
nomjoueur = joueur.pseudo
nomadverse = "Kaïto"
console.log(joueur);

genius.event("#jouer", "click", () => {
    joueurpremiertour = selectionjoueurpremiertour()
    game.scene.start("Combat", "Acceuil");


    dialogueactif = true
    dialogue(nomjoueur, nomadverse, 'Que le combat commence !')



    genius.timeursecondes('3', () => {
        dialogue(nomjoueur, nomadverse)
    })
    console.log(joueurpremiertour);
    majCarte(gokupetit)


})


let collection = [gokupetit]

console.log(gokupetit);