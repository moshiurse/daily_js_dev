// Daily Challenge #1 - String Peeler

//Your goal is to create a function that removes the first and last letters of a string. Strings with two characters or less are considered invalid. 
//You can choose to have your function return null or simply ignore.


function removeTwoWordFromString(str) {
  let length = str.length;
  var newStr = str.substring(1).slice(0,-1);
  return newStr;
}
