// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = (object, value) => {
  const keysArray = Object.keys(object);

  for (const element of keysArray){ 
   if (object[element] === value){ 
     return element; 
   }
 }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // assertion passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // assertion passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // assertion passed


