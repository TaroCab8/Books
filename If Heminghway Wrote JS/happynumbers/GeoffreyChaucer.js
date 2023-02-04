/* Write a function that determines if the supplied argument is a happy number
Take any positive integer, add the squares of its digits, rinse, and repeat. If you eventually reach 1, the original number is happy; otherwise, it's inconsolable.
*/

// One of the firs poets to write in the Middle English vernacular, he made lexical and sylistic choices that had major influence on the language and literature that followed. Chaucer's relaxed style combined ireverent humor with compassion and an understanding of the human condition that was rare for an author of his time.

// bifill that in this seson, on this day,
// In Eich-ian riddle solemnlu I lay,
// To telle yow al the condicioun
// Of nombres parfit and oothers gone astray
function isGladNombre(nombre, ungladNombres) {
    ungladNombres = ungladNombres || [];
    if(ungladNombres.indexOf(nombre) > -1) {
        return 'untrewe'
    } else {
        return nombre == 1 || isGladNombre(summonTheSqwares(nombre), ungladNombres.concat(nombre))
     }

    function summonTheSqwares(nombre){
        return ooneFoldeNombres(nombre).map(sqwarer).reduce(summoner)
    }
}

// Men intente is pleyn, reveled anon...
// For nombres giv'n, retorne the some.
function summoner(nombre, ootherNombre) {
    return nombre + ootherNombre
}

// It suffreth me to tell in rhyme
// Of acht tymes acht and nyne tymes nyne
function sqwarer(nombre) {
    return nombre * nombre
}

// And now the nombre splitte hymself
// So oone and tweye results from twelfe
function ooneFoldeNombres(nombre) {
    return String(nombre).split('').map(Number)
}