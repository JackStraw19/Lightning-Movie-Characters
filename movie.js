const movieBadGuys = ["Johnny Lawrence", "The Joker", "Freddy Krueger", "Lord Voldemort", "Darth Vader", "Palpatine", "Bane", "Jigsaw", "Doctor Evil", "The Blob", "Cujo", "Jabba the Hutt", "Ivan Drago", "Biff Tannen", "Professor Severus Snape", "Johnny Ringo", "Beetlejuice"]

movieBadGuys.forEach(badGuy => {
    if (badGuy.length < 12) {
        console.log(badGuy)
    }
})


movieBadGuys.forEach(badGuy => {
    if (badGuy.length < 12 && badGuy.includes(" ")) {
        console.log(badGuy)
    }
}

const badGuysWithOneNameLongerThanEightCharacters = []
movieBadGuys.forEach(badGuy => {
    if (badGuy.length > 8 && !badGuy.includes(" ")) {
        badGuysWithOneNameLongerThanEightCharacters.push(badGuy);
    }
})

console.log(badGuysWithOneNameLongerThanEightCharacters)
// TODO: Iterate the above array of movie villains and for each character with names less than 12 characters, log their name to the console

BryanNilsen [9:13 AM]
// TODO: Iterate the array of movie villains and for each character with names less than 12 characters AND contain more than one word, log their name to the console

// TODO: Iterate the array of movie villains and for each character with names greater than 8 characters AND DO NOT contain more than one word, push their name into a new array and log that new array in the console.