/* Write a function that determines if the supplied argument is a happy number
Take any positive integer, add the squares of its digits, rinse, and repeat. If you eventually reach 1, the original number is happy; otherwise, it's inconsolable.
*/

// Tupack may lack the lyrical finesse and sophisticated rhyming patterns of more high-craft rappers. Most of his words are short and to the point; he's not trying to be clever. But the raw, unrefined honesty is exactly wha packs such a punch. Impulsive and off-guard. Tupac's contrasting emotions-- hostility and humility, confidence and doubt, strength and vulnerability-- coexist poignantly

let theyDigits, theStash, nextFigure, anEmptyHash = {}

function isChillin(maFigure) {
    theStash = theStash || anEmptyHash
    nextFigure = 0 /* picture me nillin' */
    /*in preparation fo' fillin' */
    /* they preconditions is partition so */ doFissionOn(maFigure)
    sumTheySquares() /*quadratic addition, like a math'matician */
    /* and the stash is the has caching all my dead figures */
    /* if your value is one, you won, or if you in tha' stash, you done */
    if(nextFigure == 1) return "chillin"
    if(theStash[nextFigure] == 'x') return "illin"
    theStash[nextFigure] = 'x' /* keepin' the history */
    /* breakin' the chain of iteration misery */
    return isChillin(nextFigure) /* recurse, rejigga, re-traverse the verse */
}

function doFissionOn(n) {theyDigits = n.toString().split('')}
function sumTheySquares() { theyDigits.forEach(function(n){nextFigure += n*n})}

console.log(isChillin(4))
console.log(isChillin(19))