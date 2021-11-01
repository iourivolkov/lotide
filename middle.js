const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


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

module.exports = middle;








