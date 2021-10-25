const dice = (faces = 20) => {return Math.ceil(Math.random()*faces)}

export default function attackCheck(attacker, defender, damageAttacker, damageDefender) {
    let result = dice()
    console.log('\nDice :', result)

    if (result == 1) {
        return -100
    }

    else if (result == 20) {
        return 100
    }

    else {
        
        // console.log('Attacker combat :', attacker.combat)
        // console.log('Defender combat :', defender.combat)
        return (result-10)*5 + attacker.combat - defender.combat
    }





    // let attackRoll = (Math.floor(Math.random()*20) - 10) * 10
    // if ((attackRoll + attacker.combat - defender.combat) > 0) {
    //     return true
    // }
    // else {
    //     console.log('Miss')
    //     return false
    // }
}