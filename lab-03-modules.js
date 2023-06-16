// TODO Part 8:
// Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827
function reverseString(str) {
    return [...str].reverse().join("");
}

// TODO Part 9:
// Add the reverseString function to the module.exports object
// for import using require()
module.exports = {
    reverseString: reverseString
};

// TODO Part 10:
// Add an anonymous function concatenateString that takes a string
// as a parameter, and returns the original concatenated to itself
module.exports.concatenateString = function(str) {
    return str + str;
}

// TODO Part 11:
// Import reverseString() and concatenateString() functions from lab-03-module.js
// module using require()
const moduleFunctions = require('./lab-03-module.js');
const reverseString = moduleFunctions.reverseString;
const concatenateString = moduleFunctions.concatenateString;

// Use the imported functions to produce the following output: "cbacba"
console.log(concatenateString(reverseString('abc')));
