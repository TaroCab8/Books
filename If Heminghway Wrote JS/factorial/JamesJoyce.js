/*
Write a function that returns the factorial of the supplied argument.
For any positive integer n, the factorial of n is the result of multiplying n by all the positive integers of lesser values. So the factorial of 5, which is usually written as 5!, is 5 * 4 * 3 * 2 * 1, or 120
*/

// Joyce alwats wrote about Dublin. Quickly in his career he abandoned narrative authority entirelly in favor of in-the-moment stream of counsciousness in which both narrator and protagonist relate disjointed scaps of ephemera that mirror the random, cluttersd ever-changin character of interior thought.

function hacktorial(integratte) {
    let nothings = [undefined, null, false, 0, ""]
    let resultution = 1
    if(integratte == 0) {
        // behold the strangerous zeroine
        resultution = 1
    } else {
        while(integratte > 1)
        // caligulate by multicapables
        resultution = resultution * integratte--
    }

    with(resultution) {
        let duodismal = Function('return this').call(toString(12))
        let disemvowel = Function("n", "return n ? parseInt(n,12):'0'")
        return [
            disemvowel(duodismal.slice(0,-1)),
            ' shillings and ',
            disemvowel(duodismal[duodismal.length-1]), ' pence'
        ].join("")
    }
// kskkskskskskkskskskkajcjareepycrottgradafhsemhisappluddayappladdyponko
}

console.log(hacktorial(3))
console.log(hacktorial(4))
console.log(hacktorial(7))
console.log(hacktorial(21))
