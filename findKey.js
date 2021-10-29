// FIND KEY
const findKey = (object, callback) => { // takes in obj and callback
  
  for(const key in object){ // loop over keys of object
    if(callback(object[key])){ // if callback returns truthy value, return key
      return key;
    }
  }
  return output;  // returns array of all keys 
};

// ASSERT EQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, key => key.stars === 2)); // => "noma"

console.log(findKey({
  "shiba": {breed: "dog"},
  "tabby": {breed: "cat"},
  "lab": {breed: "dog"}
}, key => key.breed === "dog")); // "shiba"



