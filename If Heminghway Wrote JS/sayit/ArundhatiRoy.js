/* 
Write a chainable function that accepts one word per function call but, when called without arguments, will report back all the previously passed words in order.
*/

/*
Roy has produced a steady stream of non fiction. Most of it is politically themed, reflecting her anticorporate, pro-people, pro-environment philosophy. */

// 1) Start with the answer. 2) Move on the Grubby Details.
// A viable try-able plan.
function sayIt(word) {
    return TheSayItSaveItThing(word)

    // Does Whatever-it-is-you-need-it-to
    // Loyal.Dependable.Weak-kneed.
    function TheSayItSaveItThing(word) {
        // When invoked it saves.
        KochuFunction(word);
        // When addressed it Says
        TheSayItSaveItThing.toString = function() {
            return theStretchableFetchableThing.join(' ');
        }
        // Thenit waits to be re-summoned
        // Not invoking. Not recursing.Just waiting.
        return TheSayItSaveItThing
    }

    // Why change KochuFunction when KochuFunction can change itself?
    function KochuFunction(word) {
        theStretchableFetchableThing = [word]
        KochuFunction = function(word) {
            theStretchableFetchableThing.push(word)
        }

        // KochuFunction is no longer what it was
        // or thought it'd be. Ever.
    }
    
}

console.log(sayIt("jola")("como")("va"))