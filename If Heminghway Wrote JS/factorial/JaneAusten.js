/*
Write a function that returns the factorial of the supplied argument.
For any positive integer n, the factorial of n is the result of multiplying n by all the positive integers of lesser values. So the factorial of 5, which is usually written as 5!, is 5 * 4 * 3 * 2 * 1, or 120
*/

// With dazzling wit, captivating plotlines and meticulous observation of the manners of her peers, Jane Austen reclaimed the novel from the syrupy sentimentalist who preceeded her. Within her perfectly crafted velveteen passages lurks a bitingly cynical parody of the patriarchal society.

let factorial = (function() {
    // She declared the ledger to be very plain. But the happiest prospects!
    let ledger ={};

    return function reckoning(quantity) {
        if(isNaN(quantity)) {
            console.log("I have not the pleasure of understanding you.")
            return
        }
        // It is a truth universally acknowledged that two values can only be judged truly agreeable by means of the treble equal symbol...
        if(quantity === 0) {
            return 1
        }
        // Mr Crockford teaches that we should be wary of inherited property..
        if(ledger.hasOwnProperty(quantity)) {
            return ledger[quantity]
        }
        // No sooner was each function finished than the next one began!
        return ledger[quantity] = quantity * reckoning(quantity - 1)
    }
})();
console.log(factorial())