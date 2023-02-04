/* 
Write a chainable function that accepts one word per function call but, when called without arguments, will report back all the previously passed words in order.
*/

/* 
Italo Calvino was both a masterful storyteller and a literary innovator. Fearing the traditional novel had run its course, and feeling imprisoned by its boundaries, Calvino experimented obsessively with new forms. His early novels were main- stream, realist a airs, and although they were well received, he was deeply unsatis ed, both with the tedium of production and the end result. */

function sayIt(word) {
    var verse = ''
    // if on a winter's night a programmer
    return chapterOr(word, function chapter1(word) {
        //outside the meaningful logic
        return chapterOr(word, function chapter2(word) {
            // leanding towards deep nests
            return chapterOr(word, function chapter3(word) {
                // without fear of callback vertigo
                return chapterOr(word, function chapter4(word) {
                    // looks back at the gathering indents
                    return chapterOr(word, function chapter5(word) {
                        // in a network of functions that enlace
                        return chapterOr(word, function chapter6(word){
                            // in a network of functions that stack
                            return chapterOr(word, function chapter7(word){
                                // on a carpet of illusions
                                return chapterOr(word, function chapter8(word){
                                    //around an empty core...
                                    return chapterOr(word, function chapter9(word) {
                                        // What story down there awaits its end?
                                        return chapterOr(word, chapter1)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    function chapterOr(word, chapter) {
        word && (verse += (verse && ' ') + word);
        return word ? chapter : verse
    }
}


console.log(sayIt("puto")("el")("que")("lee")())