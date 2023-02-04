/* Write a function that determines if the supplied argument is a happy number
Take any positive integer, add the squares of its digits, rinse, and repeat. If you eventually reach 1, the original number is happy; otherwise, it's inconsolable.
*/

// Salinger was a second world war veteran and upon his return he sought emotional solace in his writing. His work frequently features children whose honesty and vitality stand in sharp contrast to the duplicity and spiritual emptiness of his grown-up characters, showing his perception of a society preccupied with shallow affectation and largely oblivous to the real-world horrors.

// Most numbers are goddam phonies, I swear to God
function howAreYaAnyway(number){
    // What I thought I'd do, I thought I'd loop. I mean it.
    do{
        if(number < 5) break
        thisNextNumber = 0
        // Making it a string. I'm serious.
        number = String(number)
        for(i in number)
            thisNextNumber += number[i] * number[i]
        // Putting the next number one right back in the old one. Corny as hell I'll admit it
        number = thisNextNumber
    } while (true)
    // Only about five numbers are really happy, that kills me.
    return "I'm " + ['H', 'Unh'][number==1?0:1] + "appy, I really am"
}

console.log(howAreYaAnyway(4))
console.log(howAreYaAnyway(19))


