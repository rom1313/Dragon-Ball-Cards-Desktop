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