//Write a function that returns the number (count) of vowels in a given string. Letters considered as vowels are: a, i, e, o, and u. 
//The function should be able to take all types of characters as input, including lower case letters, upper case letters, symbols, and numbers.

function countVowel (string) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    if(vowel.includes(string[i].toLowerCase())){
      count++;
    }
  }

  return count;
}

console.log(countVowel("abaabbbaabbba mna s@@b a"));
