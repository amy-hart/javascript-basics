const negate = (a) => {
  // a is truthy so you don't need to check against true.
  // also you can return an expression - no need for if / else
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
  // use spacing for readability
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
  // too much spacing!
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
  // block syntax
  if(string.search(/[aeiou]/i) >= 0)
  {
    return true;
  }else
  {
    return false;
  }
};

const isLowerCase = (string) => {
  if(string.search(/[A-Z]/g) < 0)
  {
    return true;
  }else
  {
    return false;
  }
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
