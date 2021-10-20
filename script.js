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
    "biography": {
        "full-name": "Tony Stark",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Iron Knight",
            "Hogan Potts",
            "Spare Parts Man",
            "Cobalt Man II",
            "Crimson Dynamo",
            "Ironman"
        ],
        "place-of-birth": "Long Island, New York",
        "first-appearance": "Tales of Suspence #39 (March, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "6'6",
            "198 cm"
        ],
        "weight": [
            "425 lb",
            "191 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
    },
    "work": {
        "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
        "base": "Seattle, Washington"
    },
    "connections": {
        "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
        "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
    }
}

const dice = (faces = 20) => {return Math.floor(Math.random()*faces)+1}

console.log('it works')

console.log(batman['powerstats']['intelligence'])
console.log(ironman['powerstats']['intelligence'])


class Figther {
    constructor(intelligence, strength, speed, durability, power, combat) {
        this.intelligence = intelligence
        this.strength = strength
        this.speed = speed
        this.durability = durability
        this.power = power
        this.combat = combat
    }
}

