const fs = require('fs');

const wordToCheck = fs.readFileSync('./file.txt').toString();

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  if (str === reversed) {
    console.log(`${str} es un palindromo.`);
  } else {
    console.log(`${str} no es un palindromo.`);
  }
}

isPalindrome(wordToCheck);
