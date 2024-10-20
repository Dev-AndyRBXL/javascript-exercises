const res = require("express/lib/response");

//string.length returns values that are based from human
// counting (1, 2 , 3...) instead of computer counting (0, 1 , 2...)*

const reverseString = function (string) {
  let result = "";
  /*  appending
    for (let i = 0; i < string.length; i++) {
        result = string[i] + result;
    } 
    */
  /*  pre-appending
    for (let i = string.length; i >= 0; i--) {
        result += string[i-1];
    }
    */
  // Best solution:
  result = string.split("").reverse().join("");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
