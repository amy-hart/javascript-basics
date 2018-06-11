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
  
  // This is the one that had an issue
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
    // your code here
  };
  
  const averageAge = (people) => {
    // your code here
  };
  
  const createTalkingPerson = (name, age) => {
    // your code here
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