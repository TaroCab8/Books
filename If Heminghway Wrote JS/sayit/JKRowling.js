/* 
Write a chainable function that accepts one word per function call but, when called without arguments, will report back all the previously passed words in order.
*/

/*
Rowling is a masterful storyteller, crafting tight, intricate, highly imaginative plotlines and delivering them in simple, no-nonsense prose that is always articulate but never gets in the way. Her writing is also charming and funny, and her best character names (Albus Dumbledore, Cornelius Fudge, Severus Snape) are worthy of  ackeray and Dickens. And of course, there’s magic by the bucketload!
*/

function mumbleMore(pensieve, wormword, muggleBile, squib) {
    var spells = {
        engorgio: function(fn) {
            // bind with pensieves, words, and muggleBile
            return fn.bind(muggleBile, wormword ? pensieve.concat(wormword) : [pensieve] )
        },
        accio: function(squib) {
            // gather the pensieves
            return pensieve.join(' ')
        }

    }

    return spells[(wormword || pensieve.split) ? 'engorgio': 'accio'](mumbleMore)
}

console.log(mumbleMore("hola")("como")("va")("los")("pibes")("fuma")("churro")())