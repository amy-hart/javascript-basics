const getNthElement = (index, array) => {
  if((index >= array.length)){
		return array[index-array.length];
	}else{
		return array[index];
	}
};

const arrayToCSVString = (array) => {
  return array.toString();
};

const csvStringToArray = (string) => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const array2 = array.slice();
  array2.push(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index,1);
  return array;
};

const numbersToStrings = (numbers) => {
  numbers = numbers.toString();
  numbers = numbers.split(",");
  return numbers;

};

const uppercaseWordsInArray = (strings) => {
  
  jointString = [];

  for(i = 0; i < strings.length; i++)
  {
    newString = String(strings[i]).toUpperCase();
    jointString.push(newString);
  
  }

  return jointString;
 
};


const reverseWordsInArray = (strings) => {

 jointString = [];

 for(i = 0; i < strings.length; i++)
  {
    getString = String(strings[i]);
    splitWord = getString.split("");
    reverse = splitWord.reverse();
    joinUp = reverse.join("");
    jointString.push(joinUp);
  }

  return jointString;

};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}
