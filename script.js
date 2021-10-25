import attackCheck from "./attackCheck.js"
import basicRoster from "./basicRoster.js"
import calcDamage from "./calcDamage.js"
import initiativeCheck from "./initiativeCheck.js"
import pronoun from "./pronoun.js"
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

        this.alignment = character['biography']['alignment']
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



const fight = (fighterA, fighterB) => {
    let damageA = fighterA.strength + fighterA.power
    let damageB = fighterB.strength + fighterB.power
    let initiativeA = fighterA.speed
    let initiativeB = fighterB.speed
    let lifeA = fighterA.durability
    let lifeB = fighterB.durability
    const initialLifeA = lifeA
    const initialLifeB = lifeB

    let initiative
    let turns = 0

    console.log(`${fighterA.name} VS ${fighterB.name} : FIGHT !`)

    while(true) {
        turns++


        initiative = initiativeCheck(initiativeA, initiativeB)

        if (initiative == 'A') {
            if (initiativeA == fighterA.speed) {
                console.log(`\n${fighterA.name}'s turn' !`)
            }
            initiativeA /= 2
            initiativeB = fighterB.speed

            let damage = attackCheck(fighterA, fighterB, damageA, damageB)
            // console.log(damage)

            if (damage <= -100) {
                initiativeA = -100
                lifeA -= 3
                console.log(`EPIC FAIL : ${fighterA.name} trips (-3PV => ${lifeA}/${initialLifeA}).`)
            }

            else if (damage < -50) {
                initiativeA /= 2
                console.log(`Dodged...`)
            }

            else if (damage < 0) {
                let punch = Math.floor(damageA * 0.1)
                lifeB -= punch
                console.log(`Blocked (-${punch}PV => ${lifeB}/${initialLifeB}).`)                
            }

            else if (damage < 50) {
                let punch = Math.floor(damageA * 0.2)
                lifeB -= punch
                console.log(`Hit (-${punch}PV => ${lifeB}/${initialLifeB}).`)                
            }

            else if (damage < 100) {
                let punch = Math.floor(damageA * 0.3)
                lifeB -= punch
                console.log(`Great (-${punch}PV => ${lifeB}/${initialLifeB}).`)
            }

            else {
                initiativeA = fighterA.speed - 1
                let punch = Math.floor(damageA * 0.5)
                lifeB -= punch
                console.log(`CRITICAL : ${fighterB.name} stumbles (-${punch}PV => ${lifeB}/${initialLifeB}).`)
            }

            }

        else if (initiative == 'B') {
            if (initiativeB == fighterB.speed) {
                console.log(`\n${fighterB.name}'s turn' !`)
            }
            initiativeB /= 2
            initiativeA = fighterA.speed

            let damage = attackCheck(fighterB, fighterA, damageB, damageA)
            // console.log(damage)

            if (damage <= -100) {
                initiativeB = -100
                lifeB -= 3
                console.log(`EPIC FAIL : ${fighterB.name} trips (-3PV => ${lifeB}/${initialLifeB}).`)
            }

            else if (damage < -50) {
                initiativeB /= 2
                console.log(`Dodged...`)
            }

            else if (damage < 0) {
                let punch = Math.floor(damageB * 0.1)
                lifeA -= punch
                console.log(`Blocked (-${punch}PV => ${lifeA}/${initialLifeA}).`)                
            }

            else if (damage < 50) {
                let punch = Math.floor(damageB * 0.2)
                lifeA -= punch
                console.log(`Hit (-${punch}PV => ${lifeA}/${initialLifeA}).`)                
            }

            else if (damage < 100) {
                let punch = Math.floor(damageB * 0.3)
                lifeA -= punch
                console.log(`Great (-${punch}PV => ${lifeA}/${initialLifeA}).`)
            }

            else {
                initiativeB = fighterB.speed -1
                let punch = Math.floor(damageB * 0.5)
                lifeA -= punch
                console.log(`CRITICAL : ${fighterA.name} stumbles (-${punch}PV => ${lifeA}/${initialLifeA}).`)
            }



    }


        if (lifeA <= 0) {
            console.log(`\n${fighterA.name} falls on the ground... ${fighterB.name} is victorious ! \n`)
            return undefined
        }

        else if (lifeB <= 0) {
            console.log(`\n${fighterB.name} falls on the ground... ${fighterA.name} is victorious ! \n`)
            return undefined
        }
    }
}



// 0:Alien - 1:Batman - 2:Ben 10 - 3:Black Panther - 4:Black Widow - 5:Boba Fett
// 6:Buffy - 7:Catwoman - 8:Darth Vader - 9:Deadpool - 10:Donatello
// 11:Elastigirl - 12:Elektra - 13:Godzilla - 14:Goku - 15:Groot
// 16:Harley Quinn - 17:Harry Potter - 18:Indiana Jones - 19:Iron Man
// 20:Katniss Everdeen - 21:Naruto Uzumaki - 22:Rambo - 23:Rey - 24:Sauron
// 25:Spock - 26:Storm - 27:Superman - 28:T-800 - 29:Wonder Woman

// POUR TESTER LES COMBATS, ATTRIBUER A FIRST ET SECOND CI-DESSOUS DEUX NOMBRES
// DE 0 A 29 (LES HEROS CORRESPONDANTS SONT PRECISES CI-DESSUS)


let first = 5
let second = 10


fight(roster[first], roster[second])