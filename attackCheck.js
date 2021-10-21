const dice = (faces = 20) => {return Math.floor(Math.random()*faces)+1}

export default function attackCheck(attacker, defender) {
    let pronoun
    if (attacker.gender == 'Female') {
        pronoun = 'She'
    }
    else {
        pronoun = 'He'
    }

    process.stdout.write(`${pronoun} tries to attack ${defender.name}... `)
    let attackRoll = (dice() - 10) * 10
    // console.log(`Dice result : ${attackRoll}. ${attacker.name}'s combat : ${attacker.combat}. ${defender.name}'s combat : ${defender.combat}`)
    // console.log((attackRoll + attacker.combat - defender.combat))
    if ((attackRoll + attacker.combat - defender.combat) > 0) {
        console.log('and it succeeds !')
        return true
    }
    else {
        console.log('but it misses...')
        return false
    }
}