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

const assertEqual = function(array1, array2){
  if(eqArrays(array1, array2) === true){ 
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  }  else { 
    console.log(`🚨 Assertion Failed: ${array1} !== ${array2}`);
 }
} ;


const eqObjects = (object1, object2) => {
  
  const keyArray1 = Object.keys(object1); // print array of object 1 keys --> ['a','b']
  const keyArray2 = Object.keys(object2); // print array of object 2 keys --> ['a','b']

  if(keyArray1.length !== keyArray2.length){ // if same number of keys --> return true 
    return false;
  }

  for(const elem of keyArray1){ 
    if(Array.isArray(object1[elem]) ||  Array.isArray(object2[elem])){ 

      if(eqArrays(object1[elem],object2[elem]) === false) { 
        return false }
      }
     else if(object1[elem] !== object2[elem]){ 
          return false;
        }
  }
  return true; 
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true 

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false 

const a = {a: ["2", 3],b:4, c: [2,1]};
const b = {a: ["2", 3],b:4, c: [2,1]};
console.log(eqObjects(a, b)); // => true

