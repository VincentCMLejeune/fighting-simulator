export default function pronoun(character, upperCase = true) {
    if (character.gender == 'Female') {
        return 'She'
    }
    else if (character.gender == 'Male') {
        return 'He'
    }
    else {
        return 'It'
    }
}