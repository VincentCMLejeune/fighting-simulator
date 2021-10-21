export default function calcDamage (damage) {
    let damageRoll = Math.random()/2
    let totalDamage = Math.round(damageRoll * damage)
    console.log(`Dice result : ${damageRoll}. Basic damage : ${damage}. Total damage : ${totalDamage}`)
    return totalDamage
}