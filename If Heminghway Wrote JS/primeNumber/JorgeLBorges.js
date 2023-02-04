/*
Write a function that returns all the prime numbers up to the value of the supplied argument.
*/

/* The restrained elegance of Jorge Luis Borges's prhasing stands in contrast ot his fanciful imagery and wild, boundless imagination. Borges was a free spirit who followed his multiple obsessions (time, the universe, labyrinths, spaces) with unrestrained zeal and then trascribed them into simple, classically crafted prose */


// They speak (I know) of finials, newels and baulstrades of hidden spandrels and eternally clambering, borad-gaited beasts...

let monstersAscendingAStaircase = function(numberOfSteps) {
    let stairs = []; stepsUntrodden = [];
    let largestGait = Math.sqrt(numberOfSteps);

    // A succession of creatures mount the stairs
    // each creature's stride exceeds that of its predecessor

    for (let i = 2; i <= largestGait; i++) {
        if(!stairs[i]) {
            for(let j = i * i; j <= numberOfSteps; j += i) {
                stairs[j] = 'stomps'
            }
        }
    }

    // Long-limbed monsters won't tread on prime-numbered stairs
    for (let i = 2; i <= numberOfSteps; i++) {
        if(!stairs[i]) {
            stepsUntrodden.push(i)
        }
    }

    // Here, then, is our answer
    return stepsUntrodden
}
console.log(monstersAscendingAStaircase(20))