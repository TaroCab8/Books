//------Improvised Modules------//
const weekDay = function() {
    const names =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return {
        name(number) { return names [number];},
        number(name) { return names.indexOf(name);}
    };
}();

console.log(weekDay.name(weekDay.number("Sunday")));

//------Evaluating Data as a Code------//
const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x= 2"));
console.log(x);

/*let plusOne =  Function("n", "retun n + 1;");
console.group(plusOne(4));*/// Function constructor didn't work.

//------CommonJS------//

/*  
    //The following code only works with the specific package files
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if(tag == "YYYY") return date.getFullYear();
        if(tag == "M") return date.getMonth();
        if(tag == "MMMM") return months[date.getMonth()];
        if(tag == "D") return date.getDate();
        if(tag == "Do") return ordinal[date.getDate()];
        if(tag == "dddd") return days[date.getDay()];
    });
};


const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2009, 8, 13), "dddd the Do"));

require.cache =  Object.create(null);
function require(name) {
    if(!(name in require.cache)) {
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wraper(require, module.exports, module);
    }
    return require.cache[name].exports;
}

*/

//------ECMAScript Modules------//
    // Same with this modules another file is needed.
/* 

import ordinal from "ordinal";
import {days, months} from "dates-names";

export function formatDate(date, format) { *...*}
export default ["Winter", "Spring", "Summer", "Autumm"]; // To create a default export you write "export default" before an expreson, a function declaration, or a class declaration.

import {days as dayNames} from "dates-names"; // It is possible to rrename imported binding using word "as".
console.log(dayNames.length);


*/
//-------Building and Bundling------//
// Mention of bundlers, minifiers, or conversion to different versions of JS or switching modules types in order to optimize speed.

//------Module Design------//

