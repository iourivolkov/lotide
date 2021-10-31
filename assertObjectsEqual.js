// As a continuation of the previous exercise, it's time to create our assertObjectsEqual function which will help us easily test functions that return objects.

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
// Instead of doing an eqArrays check though, this assertion function will make use of your eqObjects function for object comparison.

// EQARRAYS FUNCTION 
// -----------------
const eqArrays = function(array1, array2){
  if (array1.length !== array2.length){ 
    return false;
  } else {
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]){ 
      return false; 
     }
    }
    return true; 
  }
};

// ASSERTEQUAL FUNCTION 
// --------------------
const assertEqual = function(array1, array2){
  if(eqArrays(array1, array2) === true){ 
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  }  else { 
    console.log(`🚨 Assertion Failed: ${array1} !== ${array2}`);
 }
} ;

// EQOBJECTS FUNCTION 
// ------------------
const eqObjects = (object1, object2) => {
  
  const keyArray1 = Object.keys(object1); 
  const keyArray2 = Object.keys(object2);  // ---> cannot convert undefined or null to object*** --> null or undefined being passed to object --> because i was writing assertions for the assertObjectsEqual function **

  if (keyArray1.length !== keyArray2.length){ // if same number of keys --> return true 
    return false;
  }

  for (const elem of keyArray1){ 
    if (Array.isArray(object1[elem]) ||  Array.isArray(object2[elem])){ 

      if (eqArrays(object1[elem],object2[elem]) === false) { 
        return false }
      }
     else if (object1[elem] !== object2[elem]){ 
          return false;
        }
  }
  return true; 
};

// ASSERTOBJECTSEQUAL FUNCTION
// ---------------------------
const assertObjectsEqual = (actual, expected) => {

  const inspect = require('util').inspect;
  
  if(eqObjects(actual, expected) === true){
    console.log(`✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } 
  else if (eqObjects(actual, expected) !== true){
    console.log(`🚨 ASSERTION FAILED: ${actual} !== ${expected}`);
  }
};

// FUNCTION CALL FOR AOE 
// ---------------------
const aa = {a: 1, b: 2, c: [4, 5]};
const bb = {a: 1, b: 2, c: [4, 5]};

const cc = {b: 2, c: 1};
const dd = {b: 2, c: 6};
assertObjectsEqual(aa, bb);
assertObjectsEqual(aa, cc);

console.log(`label: ${inspect(actual)}`);

// Functions that do not return values and instead print out messages to the console are more difficult to test using assertions. This is because we cannot simply compare their return value to an expected value.****




// const assertArrayEquals = require('.eqObjects'); --> requires (imports) function from eqObjects module *