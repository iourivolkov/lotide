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

const assertArrayEquals = function(array1, array2){
  if(eqArrays(array1, array2) === true){
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  }  else {
    console.log(`🚨 Assertion Failed: ${array1} !== ${array2}`);
 }
} ;

const without = function(sourceArray, itemsToRemove){
  let result = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let noMatch = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[i]) {
        noMatch = 1;
      }
    }
    if(noMatch == 0) {
      result.push(sourceArray[i]);
    }
  }
return result;
}



