nomadverse = "Kaïto"
let premiertour = true

// TODO -------------------------------- Animation de tour -------------------------------------

function animationtour() {

    if (joueurentraindejouer === nomjoueur) {
        if (premiertour === true) {
            premiertour = false
            genius.timeursecondes('2', () => {
                document.querySelector("#logotour").classList.remove('logoinvisible')
            })
            document.querySelector("#logotour").classList.remove('logotouradverse')
            document.querySelector("#logotour").classList.add('logotourjoueur')
            document.querySelector("#carteadverse").classList.remove('cartebrille')
            document.querySelector("#carte").classList.add('cartebrille')
        }
        else {
            document.querySelector("#carteadverse").classList.remove('cartebrille')
            document.querySelector("#carte").classList.add('cartebrille')
            document.querySelector("#logotour").classList.remove('logotouradverse')
            document.querySelector("#logotour").classList.add('logotourjoueur')
        }
    }
    else if (joueurentraindejouer != nomjoueur) {
        if (premiertour === true) {
            premiertour = false
            genius.timeursecondes('2', () => {
                document.querySelector("#logotour").classList.remove('logoinvisible')
            })
            document.querySelector("#logotour").classList.remove('logotourjoueur')
            document.querySelector("#logotour").classList.add('logotouradverse')
            document.querySelector("#carteadverse").classList.add('cartebrille')
            document.querySelector("#carte").classList.remove('cartebrille')
        }
        else {
            document.querySelector("#carte").classList.remove('cartebrille')
            document.querySelector("#carteadverse").classList.add('cartebrille')
            document.querySelector("#logotour").classList.remove('logotourjoueur')
            document.querySelector("#logotour").classList.add('logotouradverse')
        }
    }
}

// TODO -------------------------------- Changement de tour -------------------------------------

function changementtour() {
    if (joueurentraindejouer === nomjoueur) {
        console.log('le joueur a terminé son tour');
        joueurentraindejouer = nomadverse
        console.log(`au tour de ${joueurentraindejouer} `);
        animationtour()
        dialogue(`${joueurentraindejouer} est en train de jouer`)
        genius.timeursecondes('2', () => {
            actionadverse()
        })
        return

    }
    else if (joueurentraindejouer != nomjoueur) {
        console.log('le joueur a terminé son tour');
        joueurentraindejouer = nomjoueur
        console.log(`au tour de ${joueurentraindejouer} `);
        animationtour()
        dialogue(`${joueurentraindejouer} est en train de jouer`)
        return
    }


}
// TODO -------------------------------- Action de tour joueur-------------------------------------
function action(choix) {
    let nouveaupv
    if (joueurentraindejouer === nomjoueur && choix === 'atk') {
        console.log("Le joueur a choisi atk !");
        dialogue(`${joueurentraindejouer} a choisi d'attaquer !`)
        console.log('atk de la carte :' + carteencoursjoueur.atk);
        console.log(cartencoursadverse);
        let degats = carteencoursjoueur.atk
        genius.timeursecondes('2', () => {

            dialogue(`${joueurentraindejouer} inflige ${degats} de dégats !`)
            if (cartencoursadverse.modedef === true) {
                dialogue(`${cartencoursadverse.nom} ne reçoit que ${degats - cartencoursadverse.modedefvalue} de dégats !`)
                if (degats - cartencoursadverse.modedefvalue < 1) {
                    nouveaupv = cartencoursadverse.pv - 0
                }
                else {
                    nouveaupv = cartencoursadverse.pv - degats + cartencoursadverse.modedefvalue
                }




                if (cartencoursadverse.pv - (degats - cartencoursadverse.modedefvalue) <= 0) {
                    cartepvadverse.textContent = "K.O"
                    dialogue(`${carteencoursadverse.nom} est K.O !`)
                    majCarteadverse(lunch)
                    carteencoursadverse = { ...lunch }
                    console.log(carteencoursadverse);
                    genius.timeursecondes('2', () => {
                        dialogue(`${nomadverse} joue maintenant ${carteencoursadverse.nom}`)
                        genius.timeursecondes('2', () => {
                            changementtour()
                            actionencours = false
                        })

                    })
                }
                else {
                    cartencoursadverse.pv = nouveaupv
                    cartepvadverse.textContent = nouveaupv
                    delete cartencoursadverse.modedef
                    delete cartencoursadverse.modedefvalue
                    genius.timeursecondes(2, () => {
                        changementtour()
                        actionencours = false
                    })

                }
            }
            else {
                if (cartencoursadverse.pv - degats <= 0) {
                    cartepvadverse.textContent = "K.O"
                    dialogue(`${cartencoursadverse.nom} est K.O !`)
                    majCarteadverse(lunch)
                    cartencoursadverse = { ...lunch }
                    console.log(cartencoursadverse);
                    genius.timeursecondes('2', () => {
                        dialogue(`${nomadverse} joue maintenant ${cartencoursadverse.nom}`)
                        genius.timeursecondes('2', () => {
                            changementtour()
                            actionencours = false
                        })

                    })
                }
                else {
                    nouveaupv = cartencoursadverse.pv - degats
                    cartencoursadverse.pv = nouveaupv
                    cartepvadverse.textContent = nouveaupv
                    genius.timeursecondes(2, () => {
                        changementtour()
                        actionencours = false
                    })

                }
            }



        })




    }
    else if (joueurentraindejouer === nomjoueur && choix === 'def') {

    }
    else if (joueurentraindejouer === nomjoueur && choix === 'special') {
        console.log(carteencoursjoueur);
        if (carteencoursjoueur.special === 'Rage') {

            console.log(`${joueurentraindejouer} a utilisé Rage !`);
            if (carteencoursjoueur.pv < 9) {
                console.log(`${joueurentraindejouer} attaque deux fois !`);
                dialogue(`${joueurentraindejouer} attaque deux fois !`)
            }
            else {
                dialogue(`Condition non valide (Rage)`)
                actionencours = false

            }
        }
    }


}
// TODO -------------------------------- Action de tour adverse-------------------------------------
function actionadverse() {
    let choixadverse = genius.nbaleatoire(3)
    console.log(choixadverse);
    let degatsadverse = cartencoursadverse.atk
    if (choixadverse === 1) {
        genius.timeursecondes('1', () => {
            dialogue(`${joueurentraindejouer} a choisi d'attaquer !`)
            genius.timeursecondes('2', () => {
                dialogue(`${joueurentraindejouer} inflige ${degatsadverse} de dégats !`)
                if (carteencoursjoueur.modedef === true) {
                    dialogue(`${carteencoursjoueur.nom} ne reçoit que ${degatsadverse - carteencoursjoueur.modedefvalue} de dégats !`)
                    nouveaupv = carteencoursjoueur.pv - degatsadverse + carteencoursjoueur.modedefvalue



                    if (carteencoursjoueur.pv - (degatsadverse - carteencoursjoueur.modedefvalue) <= 0) {
                        cartepv.textContent = "K.O"
                        dialogue(`${carteencoursjoueur.nom} est K.O !`)
                        majCarte(lunch)
                        carteencoursjoueur = { ...lunch }
                        console.log(carteencoursjoueur);
                        genius.timeursecondes('2', () => {
                            dialogue(`${nomjoueur} joue maintenant ${carteencoursjoueur.nom}`)
                            genius.timeursecondes('2', () => {
                                changementtour()

                            })

                        })
                    }
                    else {
                        carteencoursjoueur.pv = nouveaupv
                        cartepv.textContent = nouveaupv
                        delete carteencoursjoueur.modedef
                        delete carteencoursjoueur.modedefvalue
                        genius.timeursecondes(2, () => {
                            changementtour()

                        })

                    }
                }
                else {
                    if (carteencoursjoueur.pv - degatsadverse <= 0) {
                        cartepv.textContent = "K.O"
                        dialogue(`${carteencoursjoueur.nom} est K.O !`)
                        majCarte(lunch)
                        carteencoursjoueur = { ...lunch }
                        console.log(carteencoursjoueur);
                        genius.timeursecondes('2', () => {
                            dialogue(`${nomjoueur} joue maintenant ${carteencoursjoueur.nom}`)
                            genius.timeursecondes('2', () => {
                                changementtour()

                            })

                        })
                    }
                    else {
                        nouveaupv = carteencoursjoueur.pv - degatsadverse
                        carteencoursjoueur.pv = nouveaupv
                        cartepv.textContent = nouveaupv
                        genius.timeursecondes(2, () => {
                            changementtour()

                        })

                    }
                }

            })

        })



    }
    else if (choixadverse === 2) {
        dialogue(`${joueurentraindejouer} a choisi la défense !`)
        cartencoursadverse.modedef = true
        cartencoursadverse.modedefvalue = cartencoursadverse.def
        console.log(cartencoursadverse);
        genius.timeursecondes('2', () => {
            changementtour()
        })
    }
    else if (choixadverse === 3) {
        dialogue(`${joueurentraindejouer} a choisi le spécial !`)
        genius.timeursecondes('2', () => {
            changementtour()
        })
    }

}




// TODO -------------------------------- Click déclenchement action -------------------------------------
function specialclick() {
    if (actionencours === false) {

        if (joueurentraindejouer === nomjoueur) {
            actionencours = true
            console.log("spécial activé");
            action('special')
        }
        else {
            console.log("spécial inactif car ce n'est pas votre tour");
        }
    }

}
function atkclick() {
    if (actionencours === false) {
        if (joueurentraindejouer === nomjoueur) {
            actionencours = true
            console.log("atk activé");
            action('atk')
        }
        else {
            console.log("atk inactif car ce n'est pas votre tour");
        }

    }


}
function defclick() {


    if (joueurentraindejouer === nomjoueur) {
        console.log("def activé");
        action('def')
    }
    else {
        console.log("def inactif car ce n'est pas votre tour");
    }

}