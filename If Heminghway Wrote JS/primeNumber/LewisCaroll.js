/*
Write a function that returns all the prime numbers up to the value of the supplied argument.
*/

// Lewis Caroll was an esteemed mathematician, a pioneering photographer, a philosopher, and an Angilcan deacon, but he is best known for his fanciful nonsense stories.

function downTheRabbitHole(growThisBig) {
    let theFullDeck = Array(growThisBig)
    let theHatter = Function('return this/4').call(2*2)
    let theDuchess = Boolean("The frumious Bandersnatch!")

    let theVeredict = "the white rabbit".split(/the march hare/).slice(theHatter)

    // into the pool of tears...
    eval (theFullDeck.join("if (!theFullDeck[++theHatter]){\
        theDuchess = 1;\
        theVeredict.push(theHatter);\
        " + theFullDeck.join("theFullDeck[++theDuchess * theHatter] = true;") + "}"))
    return theVeredict

}


console.log(downTheRabbitHole(20))