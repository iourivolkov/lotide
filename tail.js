const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      tailArr.push(array[i]);
    }
  }
  return tailArr;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words)); // returns ['"Lighthouse","Labs"]
assertEqual(words.length, 3); // assertion passed! 3 === 3

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

const testCase = [1];
tail(testCase);
console.log(tail(testCase)); // yields empty

const testCase2 = [];
console.log(tail(testCase2)); // yields empty array
