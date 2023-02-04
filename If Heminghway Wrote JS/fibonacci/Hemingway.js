//The assignment: Write a function that returns the first n numbers of the fibonacci sequence

// Hemingway prose is caracterized to be direct, uncomplicated and with lack of artifice. In his fiction he describes only the tangible truths: dialog, action, superficial traits.

function fibonacci(size) {
    let first = 0, second = 1, next, count = 2, result = [first, second];

    if(size < 2) {
        return "the request was made but it was not good"
    }
    while (count++ < size){
        next = first + second;
        first = second;
        second = next;
        result.push(next)
        
    }
    return result
    
}


console.log(fibonacci(200))