/* 
Write a chainable function that accepts one word per function call but, when called without arguments, will report back all the previously passed words in order.
*/

/*
It’s hard to separate Sylvia Plath’s writing from her troubled life. Plath’s suicide at age 30 more or less de ned the public’s perception of her oeuvre: des- perate, angry, and uncompromising—the so-called confessional voice. Yet by her own admission, Plath hid behind many masks, and it was only at the very end of her life that she fully allowed the constant feelings of hurt, alienation, and terror to  flood un- checked onto the page. Most of the work for which she’s now famous was published posthumously.
*/

words = ''; wordless = ' ';
// I am calm. I am calm.
function say_it(word) {
    // It is the calm before something awful.
    return word ? smothered_mouthfuls(word) : end()
}

function smothered_mouthfuls(word) {
    // Dutifully swallowing words
    word = words ? wordless + word : word
    words = words + word
    return say_it
}

function end () {
    // Grudgingly, my ungainly tongue
    // Pokes and stirs, to render
    // Empty substanceless nothings
    return void this, words
}

console.log(say_it("Helo")("Como va")("Todo bien")())