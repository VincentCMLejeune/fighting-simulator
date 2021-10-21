export default function initiativeRoll(initiativeA, initiativeB) {
    let pif = Math.random()
    console.log(pif)
    if (pif < 0.5) {
        return "A"
    }
    else {
        return "B"
    }
}