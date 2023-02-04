/*
Write a function that returns the factorial of the supplied argument.
For any positive integer n, the factorial of n is the result of multiplying n by all the positive integers of lesser values. So the factorial of 5, which is usually written as 5!, is 5 * 4 * 3 * 2 * 1, or 120
*/

// Althoug there is nothing groundbreajing about format of his stories and even the narrative is mostly linear, his writing is lively, and we¡re drawn to the emotional chasm between characters. On top of that Doyle concots a deligthfully freakish cast of minor characters, evoking London's ghoulish underbelly.


"use strict"
// in solving a problem of this sort, the grand thing is to reason backwards..

// some things are easier known than explained
let caseHistory = new Object({2:2, 6:3});

function unfactorial(evidence) {
    // it is my belief, Watson, founded upon my experience, that a mathematician would never chase the factorial of zero
    if (evidence === 1) { return 1}
    
    // Seek out logical precedence
    if(caseHistory[evidence]) {
        // Elementary
        return caseHistory[evidence]
    }

    // Eliminate the impossible
    if(evidence === 0 || evidence % 24 !== 0) {
        return "charlatans"
    }

    // At this point deductions may be drawn
    let theDeduction, numerator = evidence, denominator = 1
    while(numerator % denominator === 0) {
        numerator = numerator / denominator++
        if (numerator === denominator) {
            theDeduction = numerator
        }
    }

    theDeduction = theDeduction || "impostors"

    // What one man can invent, another can discover
    caseHistory[evidence] = theDeduction
    // What remains, however improbable, must be the truth
    return theDeduction
}

console.log(unfactorial(5))