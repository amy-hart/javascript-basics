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
   newArray = [];    
    const returnEvenNumbers = (element) => {
  
      if(element % 2 === 0){
        newArray.push(element);
      }
    }
    numbers.filter(returnEvenNumbers);
    return newArray;
  };

  const removeNthElement2 = (index, array) => {
    newArray = array.slice();	
    newArray.splice(index,1);
    return newArray
  };

const elementsStartingWithAVowel = (strings) => {
  newArray = []; 
  const filterStrings = (element) => {
   if(/([aeiou])/gi.test(element[0]) === true){
    newArray.push(element);
    }
  }
  strings.filter(filterStrings);
  return newArray;
};

const removeSpaces = (string) => {
  return string.replace(/([ ])/g,'');
};

const sumNumbers = (numbers) => {
  return numbers.reduce(function(a,b){return a + b})
};

const sortByLastLetter = (strings) => {

  const compare = (a,b) => {

   console.log("Test - " + a + " VS " + b +".");
    if(a[a.length-1] < b[b.length-1]){
      //console.log("a less than b");
      return -1;
    }
    else if(a[a.length-1] > b[b.length-1]){
      return 1;
      //console.log("a greater than b");
    }else{
      console.log("neither condition met");
    }
    return 0;
  }  

  strings.sort(compare);

  return strings;
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
