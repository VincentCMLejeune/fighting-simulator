export default function attackCheck(attacker, defender) {

    // process.stdout.write(`${pronoun} tries to attack ${defender.name}... `)
    let attackRoll = (dice() - 10) * 10
    // console.log(`Dice result : ${attackRoll}. ${attacker.name}'s combat : ${attacker.combat}. ${defender.name}'s combat : ${defender.combat}`)
    // console.log((attackRoll + attacker.combat - defender.combat))
    if ((attackRoll + attacker.combat - defender.combat) > 0) {
        // console.log('and it succeeds !')
        return true
    }
    else {
        console.log('Miss')
        return false
    }
}