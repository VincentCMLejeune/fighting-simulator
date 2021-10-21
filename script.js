const batman = {
    "response": "success",
    "id": "70",
    "name": "Batman",
    "powerstats": {
        "intelligence": "100",
        "strength": "26",
        "speed": "27",
        "durability": "50",
        "power": "47",
        "combat": "100"
    },
}

const ironman = {
    "response": "success",
    "id": "346",
    "name": "Iron Man",
    "powerstats": {
        "intelligence": "100",
        "strength": "85",
        "speed": "58",
        "durability": "85",
        "power": "100",
        "combat": "64"
    },
}

const alien = {
    "response": "success",
    "id": "18",
    "name": "Alien",
    "powerstats": {
        "intelligence": "50",
        "strength": "28",
        "speed": "42",
        "durability": "90",
        "power": "57",
        "combat": "60"
    },
}

const vader = {
    "response": "success",
    "id": "208",
    "name": "Darth Vader",
    "powerstats": {
        "intelligence": "69",
        "strength": "48",
        "speed": "33",
        "durability": "35",
        "power": "100",
        "combat": "100"
    },
}

const goku = {
    "response": "success",
    "id": "289",
    "name": "Goku",
    "powerstats": {
        "intelligence": "56",
        "strength": "100",
        "speed": "75",
        "durability": "90",
        "power": "100",
        "combat": "100"
    },
}

const potter = {
    "response": "success",
    "id": "310",
    "name": "Harry Potter",
    "powerstats": {
        "intelligence": "75",
        "strength": "7",
        "speed": "21",
        "durability": "10",
        "power": "100",
        "combat": "50"
    },
}

const naruto = {
    "response": "success",
    "id": "485",
    "name": "Naruto Uzumaki",
    "powerstats": {
        "intelligence": "50",
        "strength": "80",
        "speed": "32",
        "durability": "80",
        "power": "100",
        "combat": "100"
    },
}

const wonder = {
    "response": "success",
    "id": "720",
    "name": "Wonder Woman",
    "powerstats": {
        "intelligence": "88",
        "strength": "100",
        "speed": "79",
        "durability": "100",
        "power": "100",
        "combat": "100"
    },
}

const harley = {
    "response": "success",
    "id": "309",
    "name": "Harley Quinn",
    "powerstats": {
        "intelligence": "88",
        "strength": "12",
        "speed": "33",
        "durability": "65",
        "power": "55",
        "combat": "80"
    },
}

import attack from "./attack.js"
import calcDamage from "./calcDamage.js"
import initiativeRoll from "./initiativeRoll.js"

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
    }
}



const Alien = new Fighter(alien)
const Batman = new Fighter(batman)
const Goku = new Fighter(goku)
const Harley = new Fighter(harley)
const Ironman = new Fighter(ironman)
const Naruto = new Fighter(naruto)
const Potter = new Fighter(potter)
const Vader = new Fighter(vader)
const Wonder = new Fighter(wonder)


const fight = (fighterA, fighterB) => {
    let damageA = fighterA.strength + fighterA.power
    let damageB = fighterB.strength + fighterB.power
    let lifeA = fighterA.durability
    let lifeB = fighterB.durability
    let initiativeA = fighterA.speed
    let initiativeB = fighterB.speed
    let turn

    console.log(`On my left, ${fighterA.name} with ${lifeA} life points, ${damageA} possible damage and ${initiativeA} speed !`)
    console.log(`And on my right, ${fighterB.name} with ${lifeB} life points, ${damageB} possible damage and ${initiativeB} speed !`)

    while(true) {
        turn = initiativeRoll(initiativeA, initiativeB)

        if (turn == 'A') {
            console.log(`${fighterA.name} has the initiative !`)

            if (attack(fighterA, fighterB)) {
                lifeB -= calcDamage(damageA)
                console.log(`${fighterB.name} now has ${lifeB} life points !`)
                if (lifeB <= 0) {
                    console.log(`${fighterB.name} falls on the ground... ${fighterA.name} is victorious !`)
                    return undefined
                }
            }
        }

        else if (turn == 'B') {
            console.log(`${fighterB.name} has the initiative !`)

            if (attack(fighterB, fighterA)) {
                lifeA -= calcDamage(damageB)
                console.log(`${fighterA.name} now has ${lifeA} life points !`)
                if (lifeA <= 0) {
                    console.log(`${fighterA.name} falls on the ground... ${fighterB.name} is victorious !`)
                    return undefined
                }
            }
        }


    }
}

fight(Batman, Harley)