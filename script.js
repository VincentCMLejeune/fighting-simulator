import attackCheck from "./attackCheck.js"
import basicRoster from "./basicRoster.js"
import calcDamage from "./calcDamage.js"
import initiativeCheck from "./initiativeCheck.js"
class Fighter {
    constructor(character) {
        let {intelligence, strength, speed, durability, power, combat} = character['powerstats']
        this.name = character['name']
        this.intelligence = Number(intelligence)
        this.strength = Number(strength)
        this.speed = Number(speed)
        this.durability = Number(durability)
        this.power = Number(power)
        this.combat = Number(combat)

        this.gender = character['appearance']['gender']
    }
}

let roster = []

const Alien = new Fighter(basicRoster[18])
roster.push(Alien)
const Batman = new Fighter(basicRoster[70])
roster.push(Batman)
const Ben10 = new Fighter(basicRoster[78])
roster.push(Ben10)
const BlackPanther = new Fighter(basicRoster[106])
roster.push(BlackPanther)
const BlackWidow = new Fighter(basicRoster[107])
roster.push(BlackWidow)
const BobaFett = new Fighter(basicRoster[127])
roster.push(BobaFett)
const Buffy = new Fighter(basicRoster[140])
roster.push(Buffy)
const Catwoman = new Fighter(basicRoster[165])
roster.push(Catwoman)
const DarkVador = new Fighter(basicRoster[208])
roster.push(DarkVador)
const Deadpool = new Fighter(basicRoster[213])
roster.push(Deadpool)
const Donatello = new Fighter(basicRoster[228])
roster.push(Donatello)
const Elastigirl = new Fighter(basicRoster[236])
roster.push(Elastigirl)
const Elektra = new Fighter(basicRoster[238])
roster.push(Elektra)
const Godzilla = new Fighter(basicRoster[287])
roster.push(Godzilla)
const Goku = new Fighter(basicRoster[289])
roster.push(Goku)
const Groot = new Fighter(basicRoster[303])
roster.push(Groot)
const HarleyQuinn = new Fighter(basicRoster[309])
roster.push(HarleyQuinn)
const HarryPotter = new Fighter(basicRoster[310])
roster.push(HarryPotter)
const IndianaJones = new Fighter(basicRoster[341])
roster.push(IndianaJones)
const IronMan = new Fighter(basicRoster[346])
roster.push(IronMan)
const Katniss = new Fighter(basicRoster[381])
roster.push(Katniss)
const Naruto = new Fighter(basicRoster[485])
roster.push(Naruto)
const Rambo = new Fighter(basicRoster[540])
roster.push(Rambo)
const Rey = new Fighter(basicRoster[555])
roster.push(Rey)
const Sauron = new Fighter(basicRoster[574])
roster.push(Sauron)
const Spock = new Fighter(basicRoster[627])
roster.push(Spock)
const Storm = new Fighter(basicRoster[638])
roster.push(Storm)
const Superman = new Fighter(basicRoster[644])
roster.push(Superman)
const Terminator = new Fighter(basicRoster[650])
roster.push(Terminator)
const Wonder = new Fighter(basicRoster[720])
roster.push(Wonder)

// TEST
// for (let hero of roster) {
//     console.log(`${hero.name} : ${hero.size}`)
// }

const fight = (fighterA, fighterB) => {
    let damageA = fighterA.strength + fighterA.power
    let damageB = fighterB.strength + fighterB.power
    let initiativeA = fighterA.speed
    let initiativeB = fighterB.speed
    let lifeA = fighterA.durability
    let lifeB = fighterB.durability

    let initiative
    let turns = 0

    console.log('\nWelcome to the Bagarre Club ! Tonight we have a special show...')
    console.log(`On my left, ${fighterA.name} with ${lifeA} life points, ${damageA} possible damage and ${initiativeA} speed !`)
    console.log(`And on my right, ${fighterB.name} with ${lifeB} life points, ${damageB} possible damage and ${initiativeB} speed !`)

    while(true) {
        turns++
        console.log("\nTurn", turns)


        initiative = initiativeCheck(initiativeA, initiativeB)

        if (initiative == 'A') {
            console.log(`${fighterA.name} has the initiative !`)
            initiativeA /= 2
            initiativeB = fighterB.speed

            if (attackCheck(fighterA, fighterB) == true) {
                let damages = calcDamage(damageA)
                lifeB -= damages
                console.log(`${damages} points of damage : ${fighterB.name} now has ${lifeB} life points !`)
                if (lifeB <= 0) {
                    console.log(`${fighterB.name} falls on the ground... ${fighterA.name} is victorious ! \n`)
                    return undefined
                }
            }
        }

        else if (initiative == 'B') {
            console.log(`${fighterB.name} has the initiative !`)
            initiativeB /= 2
            initiativeA = fighterA.speed

            if (attackCheck(fighterB, fighterA) == true) {
                let damages = calcDamage(damageB)
                lifeA -= damages
                console.log(`${damages} points of damage : ${fighterA.name} now has ${lifeA} life points !`)
                if (lifeA <= 0) {
                    console.log(`${fighterA.name} falls on the ground... ${fighterB.name} is victorious ! \n`)
                    return undefined
                }
            }
        }


    }
}

fight(Batman, HarleyQuinn)