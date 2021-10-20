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

const astroboy = {
    "response": "success",
    "id": "47",
    "name": "Astro Boy",
    "powerstats": {
        "intelligence": "null",
        "strength": "90",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
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

const dice = (faces = 20) => {return Math.floor(Math.random()*faces)+1}

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
const Astroboy = new Fighter(astroboy)
const Batman = new Fighter(batman)
const Goku = new Fighter(goku)
const Harley = new Fighter(harley)
const Ironman = new Fighter(ironman)
const Naruto = new Fighter(naruto)
const Potter = new Fighter(potter)
const Vader = new Fighter(vader)
const Wonder = new Fighter(wonder)


const attack = (attacker, defender) => {
    console.log(`${attacker.name} tries to attack ${defender.name} !`)
    let attackRoll = (dice() - 10) * 10
    console.log(`Dice result : ${attackRoll}. ${attacker.name}'s combat : ${attacker.combat}. ${defender.name}'s combat : ${defender.combat}`)
    console.log((attackRoll + attacker.combat - defender.combat))
    if ((attackRoll + attacker.combat - defender.combat) > 0) {
        console.log('It succeeds !')
        return true
    }
    else {
        console.log('It misses...')
        return false
    }
}

const calcDamage = (damage) => {
    let damageRoll = Math.random()
    let totalDamage = Math.round(damageRoll * damage)
    console.log(`Dice result : ${damageRoll}. Basic damage : ${damage}. Total damage : ${totalDamage}`)
    return totalDamage
}

const fight = (fighterA, fighterB) => {
    lifeA = fighterA.durability
    lifeB = fighterB.durability
    damageA = Math.max(fighterA.strength, fighterA.power)
    damageB = Math.max(fighterB.strength, fighterB.power)

    console.log(`On my left, ${fighterA.name} with ${lifeA} life points`)
    console.log(`And on my right, ${fighterB.name} with ${lifeB} life points`)
    
    while(true) {
        if (attack(fighterA, fighterB)) {
            lifeB -= calcDamage(damageA)
            console.log(`${fighterB.name} now has ${lifeB} life points !`)
            if (lifeB <= 0) {
                console.log(`${fighterB.name} falls on the ground... ${fighterA.name} is victorious !`)
                return undefined
            }
        }

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

fight(Goku, Vader)