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

const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1, array2) === true){ 
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  }  else { 
    console.log(`🚨 Assertion Failed: ${array1} !== ${array2}`);
 }
} ;


const eqObjects = (object1, object2) => {
  
  const keyArray1 = Object.keys(object1); 
  const keyArray2 = Object.keys(object2);  

  if (keyArray1.length !== keyArray2.length){ 
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


const assertObjectsEqual = (actual, expected) => {
  
  const inspect = require('util').inspect;
  console.log(`values: ${inspect(actual)} === ${inspect(expected)}`);
  
  if(eqObjects(actual, expected) === true){
    console.log(`✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } 
  else if (eqObjects(actual, expected) !== true){
    console.log(`🚨 ASSERTION FAILED: ${actual} !== ${expected}`);
  }
};



const aa = {a: 1, b: 2, c: [4, 5]};
const bb = {a: 1, b: 2, c: [4, 5]};

const cc = {b: 2, c: 1};
const dd = {b: 2, c: 6};
assertObjectsEqual(aa, bb);
assertObjectsEqual(aa, cc);

