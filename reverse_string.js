"use strict";
function reverseWord(str) {
  //Your code here
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }
  return tempStr;
}

console.log(reverseWord("Geeks"));
