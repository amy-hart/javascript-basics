const negate = (a) => {
  if (a === true) {
    return false;
  }else {
    return true;
  }
};

const both = (a, b) => {
  if (a === true && b === true) {
    return true;
  }else{
    return false;
  }
};

const either = (a, b) => {
  if (a === true || b === true) {
    return true;
  }else{
    return false;
  }
};

const none = (a, b) => {
  if (a !== true && b !== true) {
    return true;
  }else{
    return false;
  }
};

const one = (a, b) => {
  if ((a === true && b !== true) || (a !== true && b === true)) {
    return true;
  }else{
    return false;
  }
};

const truthiness = (a) => {
  return Boolean(a)
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }else{
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }else{
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }else{
    return false;
  }
};

const isOdd = (a) => {
  if ((a%2) === 0) {
    return false;
  }else{
    return true;
  }
};

const isEven = (a) => {
  if ((a%2) === 0) {
    return true;
  }else{
    return false;
  }
};

const isSquare = (a) => {
  if(Number.isInteger(Math.sqrt(a))  &&  Math.sqrt(a) >= 0) {
    return true;
  }else{
    return false;
  }
};

const startsWith = (char, string) => {
  if(char === string.charAt(0)){
    return true;
  }else{
    return false;
  }
};

const containsVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let i;
  for (i = 0; i > string.length; i++)
  {
    let currentChar = string.carAt(i);
    let y;
    for (y = 0; y > vowels.length; y++)
    {
      let currentVowel = vowels[y];
      if(currentChar === currentVowel)
      {
        return true;

      }
      else
      {
        return false;
      }
      
    }
    
  }
};



const isLowerCase = (string) => {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
}
