// assertEqual 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays
const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
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

// middle
const middle = (arr) => {
  let i = 0; 
  let result = [];

  if(arr.length == 1 || arr.length == 2 || arr.length == 0){ // if arr contains 1 elem, 2 elems, or no elems - return empty array
    return [];

  } else if (arr.length % 2 == 1) { // if array is odd (remainder) - return the middle elem (single)
    i = (arr.length - 1) /2;
    result.push(arr[i]);
    return result;

  } else if (arr.length % 2 == 0) { // if array is even (no remainder) - return the two middle elems
    i = arr.length / 2;
    result.push(arr[i - 1], arr[i]);
    return result;
   }
};








