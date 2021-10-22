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
    "biography": {
        "full-name": "Bruce Wayne",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Insider",
            "Matches Malone"
        ],
        "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
        "first-appearance": "Detective Comics #27",
        "publisher": "DC Comics",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "6'2",
            "188 cm"
        ],
        "weight": [
            "210 lb",
            "95 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
    },
    "work": {
        "occupation": "Businessman",
        "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
    },
    "connections": {
        "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
        "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    }
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
    "biography": {
        "full-name": "Harley Quinn",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Harleen Quinzel",
            "Harl",
            "Cupid of Crime",
            "Jane Wisakedjak",
            "Elise Archer",
            "Pumpkin Pooh"
        ],
        "place-of-birth": "-",
        "first-appearance": "Batman: Harley Quinn (October, 1999)",
        "publisher": "DC Comics",
        "alignment": "bad"
    },
    "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
            "5'7",
            "170 cm"
        ],
        "weight": [
            "140 lb",
            "63 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
    },
    "work": {
        "occupation": "Psychiatrist",
        "base": "Gotham City"
    },
    "connections": {
        "group-affiliation": "Formerly The Quintets, The Joker, Poison Ivy, Secret Six",
        "relatives": "Barry Quinzel (brother), Sharon Quinzel (mother), Nick Quinzel (father), Jenny Quinzel (niece), Nicky Quinzel (nephew)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/701.jpg"
    }
}


const saitama = {
    "response": "success",
    "id": "502",
    "name": "One Punch Man",
    "powerstats": {
        "intelligence": "38",
        "strength": "100",
        "speed": "83",
        "durability": "95",
        "power": "55",
        "combat": "50"
    },
    "biography": {
        "full-name": "Saitama",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Caped Baldy"
        ],
        "place-of-birth": "-",
        "first-appearance": "One Punch - Chapter 1, Volume 1",
        "publisher": "Shueisha",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "5'9",
            "175 cm"
        ],
        "weight": [
            "154 lb",
            "69 kg"
        ],
        "eye-color": "-",
        "hair-color": "No Hair"
    },
    "work": {
        "occupation": "Superhero, Sensei",
        "base": "Z-City"
    },
    "connections": {
        "group-affiliation": "-",
        "relatives": "Genos (partner)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10522.jpg"
    }
}

const hellboy = {
            "id": "322",
            "name": "Hellboy",
            "powerstats": {
                "intelligence": "63",
                "strength": "53",
                "speed": "21",
                "durability": "95",
                "power": "73",
                "combat": "75"
            },
            "biography": {
                "full-name": "Anung Un Rama",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "World Destroyer",
                    "The Great Beast"
                ],
                "place-of-birth": "-",
                "first-appearance": "Dime Press #4 (May 1, 1993)",
                "publisher": "Dark Horse Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Demon",
                "height": [
                    "8'6",
                    "259 cm"
                ],
                "weight": [
                    "350 lb",
                    "158 kg"
                ],
                "eye-color": "Gold",
                "hair-color": "Black"
            },
            "work": {
                "occupation": "-",
                "base": "-"
            },
            "connections": {
                "group-affiliation": "Abe Sapien, Liz Sherman, Roger the Homunculus, Savage Dragon, the Goon, Batman, Starman, Ghost, Painkiller Jane, Lobster Johnson, Torch of Liberty",
                "relatives": "Catherine Tanner-Tremaine (mother, deceased), two unnamed maternal half-siblings (deceased), Professor Trevor Bruttenholm (foster father)"
            },
            "image": {
                "url": "https://www.superherodb.com/pictures2/portraits/10/100/813.jpg"
            }
        }

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


const Batman = new Fighter(batman)
const Harley = new Fighter(harley)
const Saitama = new Fighter(saitama)
const Hellboy = new Fighter(hellboy)


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

// fight(Batman, Harley)

console.log(basicRoster['mickey']['name'])