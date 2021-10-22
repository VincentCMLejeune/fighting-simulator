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

const Alien = new Fighter(basicRoster[18])
const Batman = new Fighter(basicRoster[70])
const Ben10 = new Fighter(basicRoster[78])
const BlackPanther = new Fighter(basicRoster[106])
const BlackWidow = new Fighter(basicRoster[107])
const BobaFett = new Fighter(basicRoster[127])
const Buffy = new Fighter(basicRoster[140])
const Catwoman = new Fighter(basicRoster[165])
const DarkVador = new Fighter(basicRoster[208])
const Deadpool = new Fighter(basicRoster[213])
const Donatello = new Fighter(basicRoster[228])
const Elastigirl = new Fighter(basicRoster[236])
const Elektra = new Fighter(basicRoster[238])
const Godzilla = new Fighter(basicRoster[287])
const Goku = new Fighter(basicRoster[289])
const Groot = new Fighter(basicRoster[303])
const HarleyQuinn = new Fighter(basicRoster[309])
const HarryPotter = new Fighter(basicRoster[310])
const IndianaJones = new Fighter(basicRoster[341])
const IronMan = new Fighter(basicRoster[346])
const Katniss = new Fighter(basicRoster[381])
const Naruto = new Fighter(basicRoster[485])
const Rambo = new Fighter(basicRoster[540])
const Rey = new Fighter(basicRoster[555])
const Sauron = new Fighter(basicRoster[574])
const Spock = new Fighter(basicRoster[627])
const Storm = new Fighter(basicRoster[638])
const Superman = new Fighter(basicRoster[644])
const Terminator = new Fighter(basicRoster[650])
const Wonder = new Fighter(basicRoster[720])

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

