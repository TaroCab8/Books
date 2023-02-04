/* Write a function that determines if the supplied argument is a happy number
Take any positive integer, add the squares of its digits, rinse, and repeat. If you eventually reach 1, the original number is happy; otherwise, it's inconsolable.
*/

// Virginia Woolf was a pioneer of lyricism in moder literature. Leaning heavily on stylistic devices- alliteration, assonance, rhythm- Woolf's unhuerried language has a lush dreamlike quality. Her sentences, unfettered by formal structure, expand into lengthy streams of consciousness, strung together with semicolons and em dashes.

function happy(number) {
    var next, numerals, noneOfThese = []

    //unless the number was nothing; or one; or unless it had been already tried
    while (number && number != 1 && noneOfThese[number] == null) {
        next = 0, numerals = String(number).split('')
        // digits forced apart, now multiplied, now cast aside; in service of what?
        while(next = next+numerals[0]*numerals[0], numerals.shift(), numerals.length);
        noneOfThese[number] = true, number = next
    }

    // to be one; alone; happily
    return number == 1
}

console.log(happy(4))
console.log(happy(19))
