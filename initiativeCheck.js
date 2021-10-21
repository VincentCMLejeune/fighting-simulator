const dice = (faces = 20) => {return Math.floor(Math.random()*faces)+1}

export default function initiativeCheck(initiativeA, initiativeB) {
    let initiativeRoll = (dice() - 10) * 10
    console.log(`Dice result : ${initiativeRoll}. First fighter's initiative : ${initiativeA}. Second fighter's initiative : ${initiativeB}`)
    console.log((initiativeRoll + initiativeA - initiativeB))
    if ((initiativeRoll + initiativeA - initiativeB) > 0) {
        return 'A'
    }
    else {
        return 'B'
    }
}