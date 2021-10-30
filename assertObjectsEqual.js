// As a continuation of the previous exercise, it's time to create our assertObjectsEqual function which will help us easily test functions that return objects.

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

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
// Instead of doing an eqArrays check though, this assertion function will make use of your eqObjects function for object comparison.

const assertArrayEquals = function(array1, array2){
  if(eqArrays(array1, array2) === true){
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  }  else {
    console.log(`🚨 Assertion Failed: ${array1} !== ${array2}`);
 }
};


const assertObjectsEqual = (object1, object2) => {
  let objectChecker = require('.eqObjects');
  
  if(objectChecker(object1, object2) === true){
    console.log(`✅ ASSERTION PASSED: ${object1} === ${object2}`);
  } else {
    console.log(`🚨 ASSERTION FAILED: ${object1} !== ${object2}`);
  }
};

// const assertArrayEquals = require('.eqObjects'); --> requires (imports) function from eqObjects module *