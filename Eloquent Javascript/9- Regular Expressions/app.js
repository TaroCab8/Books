
//----Creating a regular expression----//
let re1= new RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

//----Testing for Matches----//
console.log(/abc/.test("abcdefg"));
console.log(/abc/.test("abxdefg"));

//----Sets of Characters----//
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

    // /d Any digit Character
    // /w An alphanumeric character("Word character")
    // /s Any whitespace character(space, tab, newline, and similar)
    // /W A nonalphanumeric character
    // /S A nonwhitespace character
    // . Any character except for newlines


let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("31-jan-2005 15:20"));

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"))
console.log(notBinary.test("1100100010200110"))

//----Repeating Parts of a Pattern----//
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));


let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"))
console.log(neighbor.test("neighbor"))

let dateAndTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateAndTime.test("1-30-2003 8:45"));

//----Grouping Subexpressions----//
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"))

//----Matches and Groups----//
let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);


console.log("one two 100".match(/\d+/))


let quotedText = /'([^']*)'/;
console.log(quotedText.exec("She said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

//----The Date Class----//
console.log(new Date());

console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2021,11,28).getTime());
console.log(new Date(16406460000));


function getDate(string) {
    let [_, month, day, year] = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date (year, month -1, day);
}

console.log(getDate("1-30-2003"));

//----Word and String Boundaries----//
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));

//----Choice Patterns----//
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pig"));
console.log(animalCount.test("15 pigchickens"));
console.log(animalCount.test("15 chickens"));

//----The Mechanics of Matching----//


//----Backtracking----//
// /\b([01]+b)|[\da-f]+h|\d+)\b /;

//----The replace Method----//
console.log("papa".replace("p","m"));


console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a")); 


console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));


let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,str => str.toUpperCase()))


let stock= "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount,unit) {
    amount=Number(amount) -1;
    if(amount == 1) { //only one left, remove the "s"
        unit = unit.slice(0, unit.length -1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
//----Greed----//

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10; // then!"));
console.log(stripComments("1 /* a */ + /* b */ 1"));

//----Dynamically Creating RegExp Objects----//
let name = "harry";
let text = "Harry is a suspicious motherfucker.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"))


let weirdName = "deat+hl[]rd";
let text2 = "this deat+hl[]rd guy is an asshole.";
let escaped = weirdName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexpr = new RegExp("\\b" + escaped + "\\b", "gi");

console.log(text2.replace(regexpr, "_$&_"));

//----The search Method----//
console.log("  word".search(/\S/));
console.log("     ".search(/\S/));

//----The lastIndex Property----//
let pattern = /y/g;
pattern.lastIndex = 3;
let matches = pattern.exec("xyzzy");

console.log(matches.index);
console.log(pattern.lastIndex);


let global = /abc/g;
console.log(global.exec("xyz abc"));

let sticky= /abc/y;
console.log(sticky.exec("xyz abc"));

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1"));

console.log("banana".match(/an/g));

    //Looping Over Matches//
let input = "A string with 3 numbers in it... 42 and 88";
let number = /\b\d+\b/g;
let comparar;
while(comparar = number.exec(input)) {
    console.log("Found", comparar[0], "at", comparar.index);
}

//----Parsing an INI File----//

function parseIni(string) {
    //start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if(match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)){
            section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}

console.log(parseIni(`
name=Vasilis
[address]
city=Tessaloniki`));

//----International Characters----//


//----Summary----//


/*  /abc/ // A sequence of characters
    /[abc]/ // Any characters from a set of characters
    /[^abc]/ // Any characters NOT in a set of characters
    /[0-9]/ // Any character in a range of characters
    /x+/ // One or more occurrences of the pattern x
    /x+?/ // One or more occurrences, nongreedy
    /x*/ // Zero or more occurrences
/*  /x{2,4}/ // Two to four occurrences
    /(abc)/ // A group
    /a|b|c/ // Any ne of several patterns
    /\d/  // Any digit character
    /\w/ // An alphanumeric character("word character")
    /\s/ // Any whitespace character
    /./ // Any characters except newlines
    /\b/ // A word boundary
    /^/ // Start of input
    /$/ // End of input */