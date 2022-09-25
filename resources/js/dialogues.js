


let idtour = 0
function dialogue(texteparam) {
    selectionjoueurpremiertour()

    if (dialogueactif && idtour === 0) {
        genius.textContent(texteparam, "#dialogue")
        idtour++
    }
    else if (dialogueactif && idtour === 1) {
        genius.textContent(`${joueurpremiertour} débute la partie !`, "#dialogue")
        idtour ++
    
    }
    else{
        genius.textContent(texteparam, "#dialogue")
    }
}

