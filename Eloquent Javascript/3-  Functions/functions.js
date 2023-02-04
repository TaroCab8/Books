
// Functions
const square = function(x) {
    return x * x;
};

console.log(square(12));

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for(let count =0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2,10));

// Biding and Scopes

let x = 10;
if(true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x+z);


const halve = function(n){
    return n/2;
}

let n = 10;
console.log(halve(100));
console.log(n);

    //nested scope

    const humus = function(factor) {
        const ingredients = function(amount, unit, name) {
            let ingredientAmount = amount * factor;
            if(ingredientAmount > 1) {
                unit += "s";
            }
            console.log(`${ingredientAmount} ${unit} ${name}`)
        }
        ingredients(1, "can", "chickpeas");
        ingredients(0.25, "cup", "tahini");
        ingredients(0.25, "cup", "lemon juice");
        ingredients(1, "clove", "garlic");
        ingredients(2, "tablespoon", "olive oil");
        ingredients(0.5, "teaspoon", "cumin");
    };


// Functions as Values
/*let launchMissiles = function() {
    missileSystem.launch("now");
};

if(safeMode) {
    launchMissiles = function() {/*do nothing*//*};
};*/
// Declaration Notation
console.log("the futere says:", future());

function future(){
    return "You'll never have flying cars";
}
// Arrow Functions

const powered = (base, exonent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++) {
        result *=base;
    }
    return result;
}


const square1 = (x) => {return x*x;};
const square2 = x => x * x;
// The Call Stack

function greet(who) {
    console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");


function chicken() {
    return egg();
}
function egg() {
    return chicken();
}

/*console.log(chickem() + " came first.");*/ //do not execute, loop infinite.


// Optional Arguments

function squared(x) {return x * x;}
console.log(squared(4, true, "hedgedog"));//despite the additional parameters the before functions executes without a problem.


function minus(a,b) {
    if( b === undefined) return -a;
    else return a - b;
}
console.log (minus(10));
console.log (minus(10,5));



function superpower(base, exponent = 2) {
    let result = 1;
    for(let count = 0; count < exponent; count++) {
        result *= base;

    }
    return result;
}

console.log(power(4));
console.log(power(2,6));
// Closure
function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());


function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// Rercusion

function powercito(base, exponent) {
    if(exponent == 0) {
        return 1;
    } else {
        return base * powercito(base, exponent-1);
    }
}

console.log(power(2,3));



function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find ( current + 5, `(${history} + 5)`) ||
                    find ( current * 3, `(${history} * 3)`)
        }
    }

    return find(1, "1");
}

console.log(findSolution(24));
// Growing Functions


function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while(cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);



function prontZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while(numberString.length < 3) {
        numberString = "0" + numberString;
    }

    console.log(`${numberString} ${label}`);
}
function printFarmInventories(cows, chickens, pig) {
    prontZeroPaddedWithLabel(cows, "Cows");
    prontZeroPaddedWithLabel(chickens, "Chickens");
    prontZeroPaddedWithLabel(pig, "Pigs");
}

printFarmInventories(7,11,3);


    //let's try to pick out a single concept
function zeroPad(number, width) {
    let string = String(number);
    while(string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInvent(cows, chickens, pigs) {
    console.log(`${zeroPad(cows,3)} Cows`);
    console.log(`${zeroPad(chickens,3)} Chickens`);
    console.log(`${zeroPad(pigs,3)} Pigs`);

}

printFarmInvent(7,16,3);
// Functions and Side Effects

