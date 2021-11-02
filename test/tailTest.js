const assert = require('chai').assert;

const tail = require('../tail');

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words)); // returns ['"Lighthouse","Labs"]
// assertEqual(words.length, 3); // assertion passed! 3 === 3

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

//const testCase = [1];
//tail(testCase);
//console.log(tail(testCase)); // yields empty

//const testCase2 = [];
//console.log(tail(testCase2)); // yields empty array

describe("#tail", () => {
 
  it("returns ['2','3'] for ['1', '2', '3']", () => {
    assert.deepEqual(tail(['1', '2', '3']), ['2','3']); 
  });
  it("returns ['lighthouse','labs'] for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);

  }

)});

