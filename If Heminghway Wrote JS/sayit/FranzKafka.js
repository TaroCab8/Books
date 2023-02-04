/* 
Write a chainable function that accepts one word per function call but, when called without arguments, will report back all the previously passed words in order.
*/

/*
An open-minded reading of his best- known works— The Trial,  The Castle, and  The Metamorphosis—reveals a rich vein of absurdist humor,and heroes who face adversity with both confidence and tenacity. Although he certainly had moments of profound despair, the real Kafka probably had little in common with the humor- less, solitary, peddler-of-doom persona with which he is most often associated. */

function sayIt(firstWord) {
    var words = []
    return (function sayIt(word) {
        if(!word) {
            try {
                return sayIt()
            } catch (e) {
                // quitting at last an unsettling recursion,
                // the array was transformed into a monstrous string
                words = "there's been a hideous bug";
                return words
            }
        } else {
            words.push(word);
            return sayIt;
        }
    })(firstWord)
}

console.log(sayIt("hola")("chau")())