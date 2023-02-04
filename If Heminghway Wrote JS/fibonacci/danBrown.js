//The assignment: Write a function that returns the first n numbers of the fibonacci sequence

// Brown's offering has been a commercial hit and a critical flop. His phrasing is excessively wigthy, he has the habit of using same adverb or adjetive multiple times in the same page or even the same pharagraph which doesn't work much as fiction with the reader's imagination, unlike journalism.

/*
FACT: Some time in 1557, Michelangleo Moribundi, the renowned, bald-headed alchemist, fashioned a secret code out f bits of asparagus and placed it in a long-forgotten vault..
*/
function theDaFibonacciCode(numeratiFettucini) {
    // Wide awake, the bleary-eyed Langdom watched as two tall, lissome number
    // ones, with big feet and a type of hat, sidled up to the rounded zero...
    let ilInumerati = [0,1,1]
    //while the IntegerThatIncremetsOneByOne morphed eerily into a... three
    theIntegerThatIncremetsOneByOne = 3,
    // Now the silent ratio that could not be uttered had come to make it right
    TheBotticelliVector = 1.61803

    while (theIntegerThatIncremetsOneByOne < numeratiFettucini) {
        //somehow another number one appeared and theIntegerThatIncrementsOneByOne snatched at it gracefully
        theIntegerThatIncremetsOneByOne = theIntegerThatIncremetsOneByOne + 1

        // the renowned, rounded 16-bit unsigned integer tentatively succumbed to the strange force of the vector before pushing itself bodily into the hands of the weakly typed array
        ilInumerati.push(
            Math.round(ilInumerati[theIntegerThatIncremetsOneByOne - 2] * TheBotticelliVector)
        )
    }

    // "Too many elementi?" reminded the five-foot-eleven, bushy-eyebrowed Italian
    // To many elements?
    if (ilInumerati.length > numeratiFettucini) {
        // Intelligentely, Langdom, sporting a Harris Tweed jacket (J.Crew, $79.99), sliced it with his Modell 1961 Ausfuhrung 1994 Swiss Army knife
        ilInumerati = ilInumerati.slice(0, numeratiFettucini)
    }

    // The kaleidoscope of truth had been shaken. Now, in front of them, sat the numerically sequenced sequenza numera. Like a gleaming cathedral.
    return ilInumerati
}

console.log(theDaFibonacciCode(20))