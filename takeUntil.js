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

const takeUntil = (array, callback) => {
  let output = [];

  for (let elem of array){ // loop through values of array
   if (!callback(elem)){ // if value is falsy, push that value into output array
     output.push(elem);
     
   } else { // if value is not falsey = truthy, break out of the loop
     break;
   }
  }
  return output; // return array containing falsy values 
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);






