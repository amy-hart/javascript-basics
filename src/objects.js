const createPerson = (name, age) => {
    const person = { 
        name: name,
        age: age
    }

    return person;
  };
  
  const getName = (object) => {
    return object.name;
  };
  
  const getProperty = (property, object) => {
    return object[property];
  };
  
  // This is the one that had an issue - think this one is passing now...can probably remove this comment
  const hasProperty = (property, object) => {
     if(object[property]){
      return true;
    }else
    {
        return false;
    }
  };
  
  const isOver65 = (person) => {
    if(person.age > 65)
    {
        return true;
    }else
    {
        return false;
    }
  }
  
    const getAges = (people) => {
        ages = [];

      // no need for declaring the function separately
        const cycleArray = (person) => {
            ages.push(person.age);
        };
        people.filter(cycleArray);  

        return(ages);
    };
  
  const findByName = (name, people) => {
   
      findPerson = people.find(function(person){

        if(person.name === name){
          return person;
        }

      });

      return findPerson;
  };
  
  const findHondas = (cars) => {

    hondaCars = [];

    filterCars = cars.find(function(car){

        if(car.manufacturer === 'Honda'){
          hondaCars.push(car);
        }

      });

      return hondaCars;
  };
  
  const averageAge = (people) => {
    // your code here
    // find each age in object, add to ages array
    // add all elements together, then divdie by array.length

    ages =[];

    cycleThrough = people.map(function(person){
        if(person.age){
          ages.push(person.age);
        }
      });

    sum = ages.reduce(function(a,b){return a + b});
    return sum / ages.length;
   
  };
  
  const createTalkingPerson = (name, age) => {
    // your code here
    // use MAP?

    // you want to return an object here using the arguments passed in
  };
  
  module.exports = {
    createPerson,
    getName,
    getProperty,
    hasProperty,
    isOver65,
    getAges,
    findByName,
    findHondas,
    averageAge,
    createTalkingPerson
  }